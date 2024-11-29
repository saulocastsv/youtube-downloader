# YouTube Downloader - README

## Descrição

Este é um programa simples em Python que utiliza a biblioteca `tkinter` para criar uma interface gráfica (GUI) para o download de vídeos do YouTube. O aplicativo permite que o usuário forneça até 5 links de vídeos, escolha uma pasta para salvar os downloads e opte por converter os vídeos para o formato MP3.

## Funcionalidades

- Baixar vídeos do YouTube diretamente para uma pasta especificada pelo usuário.
- Converter vídeos para MP3 durante o processo de download, se solicitado.
- Interface gráfica com o Tkinter.
- Suporte para múltiplos links (até 5 links por vez).
- Escolher o diretório onde os vídeos serão salvos.

## Pré-requisitos

Antes de executar o programa, você precisa instalar as dependências necessárias:

1. **Python** (versão 3.6 ou superior).
2. **Pacotes Python**:
   - `yt-dlp`: Biblioteca para download de vídeos do YouTube.
   - `tkinter`: Biblioteca padrão para interfaces gráficas (geralmente já instalada com o Python).

### Instalação das dependências

Para instalar as dependências, execute os seguintes comandos no terminal ou prompt de comando:

```bash
pip install yt-dlp

- A biblioteca tkinter geralmente já vem instalada com o Python, mas caso não esteja presente, você pode instalá-la utilizando o seguinte comando (em sistemas Linux):
sudo apt-get install python3-tk
