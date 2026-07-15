const playButton = document.getElementById("playButton");

const music = document.getElementById("music");

playButton.addEventListener("click", function () {

    if (music.paused) {

        music.play();

        playButton.innerHTML = "⏸ Pause Music";

    }

    else {

        music.pause();

        playButton.innerHTML = "▶ Play Music";

    }

});
