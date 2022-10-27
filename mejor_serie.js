// Carga del iframe asincronicamente.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Crea el <iframe> (y el reproductor)
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '700',
        width: '100%',
        videoId: 'Ylv21uNzW4k',
        playerVars: {
            autoplay: 0, // Auto-play the video on load
            controls: 1, // Show pause/play buttons in player
            showinfo: 0, // Hide the video title
            modestbranding: 1, // Hide the Youtube Logo
            fs: 0, // Hide the full screen button
            iv_load_policy: 3, // Hide the Video Annotations
            autohide: 1, // Hide video controls when playing
            mute: 0, // Sound Off On
            rel: 0
			},
    });
}

