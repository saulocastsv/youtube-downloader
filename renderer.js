document.getElementById('choose-folder').addEventListener('click', () => {
    window.electron.chooseFolder().then(folderPath => {
        if (folderPath) {
            document.getElementById('output-directory').value = folderPath;
        }
    });
});

document.getElementById('download-btn').addEventListener('click', () => {
    const url = document.getElementById('url').value;
    const outputDirectory = document.getElementById('output-directory').value;
    const downloadThumbnail = document.getElementById('download-thumbnail').checked;
    const convertToMp3 = document.getElementById('convert-to-mp3').checked;

    if (!url || !outputDirectory) {
        alert('Por favor, insira um URL válido e escolha uma pasta de destino.');
        return;
    }

    document.getElementById('spinner').classList.remove('hidden');
    document.getElementById('status-bar').classList.remove('hidden');
    document.getElementById('status-message').textContent = 'Iniciando download...';

    window.electron.startDownload({
        url,
        outputDirectory,
        downloadThumbnail,
        convertToMp3
    }).then(response => {
        document.getElementById('spinner').classList.add('hidden');

        if (response.success) {
            document.getElementById('status-message').textContent = 'Download concluído com sucesso!';
            alert('Download concluído com sucesso!');
        } else {
            document.getElementById('status-message').textContent = `Erro: ${response.error}`;
            alert(`Erro ao fazer download: ${response.error}`);
        }
    }).catch(err => {
        document.getElementById('spinner').classList.add('hidden');
        document.getElementById('status-message').textContent = `Erro: ${err.message}`;
        alert(`Erro ao fazer download: ${err.message}`);
    });
});
