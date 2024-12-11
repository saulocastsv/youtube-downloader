const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    chooseFolder: () => ipcRenderer.invoke('choose-folder'),
    startDownload: (data) => ipcRenderer.invoke('start-download', data)
});
