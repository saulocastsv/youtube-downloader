const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
        },
    });

    mainWindow.loadFile('index.html');
});

ipcMain.handle('choose-folder', async () => {
    const result = await dialog.showOpenDialog(mainWindow, {
        properties: ['openDirectory']
    });
    return result.filePaths[0] || null;
});

ipcMain.handle('start-download', async (event, data) => {
    const { url, outputDirectory, downloadThumbnail, convertToMp3 } = data;

    return new Promise((resolve) => {
        const pythonProcess = spawn('python', ['backend.py', url, outputDirectory, downloadThumbnail, convertToMp3]);

        pythonProcess.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        pythonProcess.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });

        pythonProcess.on('close', (code) => {
            if (code === 0) {
                resolve({ success: true });
            } else {
                resolve({ success: false, error: `Código de saída: ${code}` });
            }
        });
    });
});
