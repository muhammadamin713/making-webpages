# Streaming video using HTTP and DASH

This is just a simple experiment. I was trying to render [this video](https://www.youtube.com/watch?v=eokZdXyjfhU).
But it is super slow. So that leads me to reading about streaming video with HTTP in this 
[docs](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video).

So I found out to stream that video (which is 3.5Gb and 2+ Hours of content), we can divide it
into smaller chunks either using DASH or HLS. Since HLS is proprietary for Apple stuff, I
decided to go with Dash.

## Setting up the project (Note to future self)

1. Download the video you wanted to download. I use [`yt-dlp`](https://github.com/yt-dlp/yt-dlp).
2. Divide the video into smaller chunks following DASH format. I use ffmpeg for this. It's better
to do this in a separate directory. I did it under `./storage`
**For example**:
```
ffmpeg -i input.mp4 -c copy -f dash -seg_duration 4 -use_template 1 -use_timeline 1 manifest.mpd
```
3. make sure to point the `manifest.mpd` in the script. In this case `index.html`
4. Run the server
```bash
python3 server.py
```
