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

## # Como Usar

## Instalação do Tkinter

A biblioteca `tkinter` geralmente já vem instalada com o Python, mas caso não esteja presente, você pode instalá-la utilizando o seguinte comando (em sistemas Linux):

```bash
sudo apt-get install python3-tk
```

1. **Python** (versão 3.6 ou superior).
2. **Pacotes Python**:
   - `yt-dlp`: Biblioteca para download de vídeos do YouTube.
   - `tkinter`: Biblioteca padrão para interfaces gráficas (geralmente já instalada com o Python).
  
     

### Instalação das dependências

Para instalar as dependências, execute os seguintes comandos no terminal ou prompt de comando:

```bash
pip install yt-dlp
```

### Abrir o aplicativo:

- Execute o código Python para abrir a aplicação gráfica. O código pode ser executado diretamente com o Python:

```bash
python3 youtube_downloader.py
```
### Configuração inicial:

- Ao abrir o aplicativo, você verá a interface gráfica com os seguintes campos:

-Quantos links deseja baixar?: Escolha o número de vídeos (máximo 5).

-Pasta para salvar os downloads: Clique em "Escolher pasta onde salvar" para selecionar o diretório onde os vídeos serão armazenados.

### Adicionar links:

-Após clicar em "Confirmar", você verá campos para inserir até 5 links de vídeos do YouTube.
-Para cada link, você pode marcar a opção "Converter para MP3" se desejar que o vídeo seja convertido após o download.

### Iniciar o download:

-Clique no botão "Iniciar Download" para começar o processo de download. Durante o processo, será exibido um spinner e o status da aplicação.

### Finalização:

-Quando todos os downloads forem concluídos, você receberá uma mensagem informando que os downloads foram concluídos com sucesso.

### Possíveis Problemas e Soluções

### Erro ao iniciar o download:

-Mensagem de erro: "Erro ao processar o vídeo [número]: [detalhes do erro]"
-Solução: Isso pode ocorrer por diversos motivos, como um link inválido ou problemas de conexão. Verifique se o link do YouTube está correto e se a conexão com a internet está funcionando.
-Não consigo escolher o diretório de saída:
-Mensagem de erro: "Erro ao acessar a pasta de saída."
-Solução: Verifique as permissões do diretório escolhido. O programa precisa de permissão de gravação para salvar os vídeos.
-O programa fica "travado" durante o download:
-Solução: O download ocorre em uma thread separada para evitar que a interface gráfica congele. Se o programa estiver demorando muito, pode ser um problema de rede ou do próprio YouTube (vídeos muito grandes ou servidores -lentos).

### Problema com a conversão para MP3:

Mensagem de erro: "Erro ao converter para MP3."

-Solução: Verifique se o FFmpeg está instalado corretamente em seu sistema. O yt-dlp usa o FFmpeg para converter vídeos para áudio.
Você pode instalá-lo via site oficial do FFmpeg ou utilizando um gerenciador de pacotes.

### O aplicativo não abre:

-Solução: Certifique-se de que o Python e as dependências necessárias estejam corretamente instalados. Caso o tkinter não esteja instalado, siga as instruções na seção de pré-requisitos.

### Contribuição
-Se você quiser contribuir com melhorias para o projeto, sinta-se à vontade para fazer um fork deste repositório, corrigir problemas ou adicionar novas funcionalidades. Para contribuir, siga os seguintes passos:

### Faça um fork deste repositório.

-Crie uma branch para a sua funcionalidade (git checkout -b nova-funcionalidade).
-Faça commit das suas alterações (git commit -am 'Adiciona nova funcionalidade').
-Envie para o repositório remoto (git push origin nova-funcionalidade).
-Crie um pull request.

### Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.
