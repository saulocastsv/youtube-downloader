import sys
from yt_dlp import YoutubeDL

def download_video(url, output_dir, download_thumbnail, convert_to_mp3):
    options = {
        'outtmpl': f"{output_dir}/%(title)s.%(ext)s",
        'format': 'best',
    }

    if convert_to_mp3:
        options['postprocessors'] = [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '320',
        }]

    try:
        with YoutubeDL(options) as ydl:
            info = ydl.extract_info(url, download=True)
            if download_thumbnail:
                download_thumbnail_image(info.get('thumbnail'), output_dir)
            print(f"Download concluído: {info.get('title')}")
    except Exception as e:
        print(f"Erro ao fazer o download: {e}", file=sys.stderr)
        sys.exit(1)

def download_thumbnail_image(url, output_dir):
    import requests
    response = requests.get(url, stream=True)
    with open(f"{output_dir}/thumbnail.jpg", 'wb') as f:
        for chunk in response.iter_content(chunk_size=8192):
            f.write(chunk)

if __name__ == "__main__":
    url = sys.argv[1]
    output_dir = sys.argv[2]
    download_thumbnail = sys.argv[3].lower() == 'true'
    convert_to_mp3 = sys.argv[4].lower() == 'true'

    download_video(url, output_dir, download_thumbnail, convert_to_mp3)
