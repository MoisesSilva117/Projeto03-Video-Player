let video = document.getElementById("video1")
let controls = document.getElementsByClassName("controls")

function goBack(){
    video.currentTime -=10
}

function playPause() {
    if (video.paused) {
        video.play()
    }
    else {
        video.pause()

    }
}

function advance() {
    video.currentTime += 10
}

function stop() {
    video.pause()
    video.currentTime = 0
}

function FullScream() {
    video.requestFullscreen();
}

