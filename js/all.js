console.log("all.js loaded")
let navigation = document.querySelector('.hamburger')
let container = document.querySelector('.navigation_container')
let close = document.querySelector('.close');


navigation.addEventListener("click", function () {
    container.style.transform = "translateY(0)"
})

close.addEventListener("click", function () {
    container.style.transform = "translateY(-100vh)"
})



document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM is loaded");
    const dropdownButton = document.querySelector(".dropdown .dropbtn");
    const dropdownContent = document.querySelector(".dropdown .dropdown-content");

    dropdownButton.addEventListener("click", function () {
        dropdownContent.classList.toggle("show");
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener("click", function (event) {
        if (!event.target.matches(".dropdown .dropbtn")) {
            if (dropdownContent.classList.contains("show")) {
                dropdownContent.classList.remove("show");
            }
        }
    });

    // ... (dein bestehender Code)

    // Radio Player
    var radioPlayer = document.getElementById('radioPlayer');
    var playButton = document.querySelector('.play');
    var pauseButton = document.querySelector('.pause');
    var forwardButton = document.querySelector('.vorwaerts');
    var backwardButton = document.querySelector('.rueckwaerts');
    var setVolumeVariable = document.querySelector('.lautstaerke-elemente');
    var volume = document.querySelector('.range-laustärke');
    // var stopButton = document.querySelector('.stop-button'); // Hier füge den Stop-Button hinzu

    function playRadio() {
        playButton.style.display = "none";
        pauseButton.style.display = "block";
        radioPlayer.play();
    }

    function pauseRadio() {
        playButton.style.display = "block";
        pauseButton.style.display = "none";
        radioPlayer.pause();
    }

    function stopRadio() {
        radioPlayer.pause();
        radioPlayer.currentTime = 0;
    }

    function forwardRadio() {
        radioPlayer.currentTime += 10; // Vorwärts spulen um 10 Sekunden (kann angepasst werden)
    }

    function backwardRadio() {
        radioPlayer.currentTime -= 10; // Rückwärts spulen um 10 Sekunden (kann angepasst werden)
    }

    function setVolume(volume) {
        radioPlayer.volume = volume; // Volume-Wert zwischen 0 und 1 setzen
    }

    // Play-Button klicken
    playButton.addEventListener('click', function () {
        playRadio();
    });

    // Pause-Button klicken
    pauseButton.addEventListener('click', function () {
        pauseRadio();
    });

    // Vorwärts-Button klicken
    forwardButton.addEventListener('click', function () {
        forwardRadio();
    });

    // Rückwärts-Button klicken
    backwardButton.addEventListener('click', function () {
        backwardRadio();
    });

    // mute-Bild wenn Regler ganz links
    volume.addEventListener('input', function () {
        let laustärke = volume.value;
        if (laustärke == 0) {
            volumeImage.src = 'images/volume-off.svg'; // Passe den Pfad zum Bild an
            setVolume(laustärke);
        } else {
            volumeImage.src = 'images/volume.svg'; // Passe den Pfad zum Bild an
            setVolume(laustärke);
        }
    });


    // Stop-Button klicken
    // stopButton.addEventListener('click', function () {
    //     stopRadio();
    // });
});

// Mute-Bild

// Lautstärke-Element auswählen
const volumeElement = document.querySelector('.ton-aus');
const volumeImage = document.querySelector('.lautstaerke-elemente img');

// Funktion, die den Sound abstellt und das Bild ändert
function toggleSoundAndImage() {
    const radioPlayer = document.getElementById('radioPlayer');
    radioPlayer.muted = !radioPlayer.muted;

    // Bild ändern basierend auf dem stummen Zustand
    if (radioPlayer.muted) {
        volumeImage.src = 'images/volume-off.svg'; // Passe den Pfad zum Bild an
    } else {
        volumeImage.src = 'images/volume.svg'; // Passe den Pfad zum Bild an
    }
}

// Eventlistener hinzufügen
volumeElement.addEventListener('click', toggleSoundAndImage);





