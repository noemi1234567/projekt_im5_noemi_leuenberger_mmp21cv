document.addEventListener("DOMContentLoaded", function() {
    const dropdownButton = document.querySelector(".dropdown .dropbtn");
    const dropdownContent = document.querySelector(".dropdown .dropdown-content");

    dropdownButton.addEventListener("click", function() {
        dropdownContent.classList.toggle("show");
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener("click", function(event) {
        if (!event.target.matches(".dropdown .dropbtn")) {
            if (dropdownContent.classList.contains("show")) {
                dropdownContent.classList.remove("show");
            }
        }
    });
    setInterval(function () {
        plusSlides(1); // Advance to the next slide
      }, 8000); // 8000 milliseconds = 3 seconds 
      
});

// // JavaScript für die Steuerung des Radioplayers
// var radioPlayer = document.getElementById('radioPlayer');
// var playButton = document.querySelector('.play')
// var pauseButton = document.querySelector('.pause')

// function playRadio() {
//     playButton.style.display = "none";
//     pauseButton.style.display = "block";
//     radioPlayer.play();
// }

// function pauseRadio() {
//     playButton.style.display = "block";
//     pauseButton.style.display = "none";
//     radioPlayer.pause();
// }

// function forwardRadio() {
//     radioPlayer.currentTime += 10; // Vorwärts spulen um 10 Sekunden (kann angepasst werden)
// }

// function backwardRadio() {
//     radioPlayer.currentTime -= 10; // Rückwärts spulen um 10 Sekunden (kann angepasst werden)
// }

// function setVolume(volume) {
//     radioPlayer.volume = volume; // Volume-Wert zwischen 0 und 1 setzen
// }

// document.addEventListener("DOMContentLoaded", function () {
//     // ... (dein bestehender Code)

// // Radio Player
// var radioPlayer = document.getElementById('radioPlayer');
// var playButton = document.querySelector('.play-button');
// var pauseButton = document.querySelector('.pause-button');
// var stopButton = document.querySelector('.stop-button'); // Hier füge den Stop-Button hinzu

// function playRadio() {
//     radioPlayer.play();
// }

// function pauseRadio() {
//     radioPlayer.pause();
// }

// function stopRadio() {
//     radioPlayer.pause();
//     radioPlayer.currentTime = 0;
// }

// function forwardRadio() {
//     radioPlayer.currentTime += 10; // Vorwärts spulen um 10 Sekunden (kann angepasst werden)
// }

// function backwardRadio() {
//     radioPlayer.currentTime -= 10; // Rückwärts spulen um 10 Sekunden (kann angepasst werden)
// }

// function setVolume(volume) {
//     radioPlayer.volume = volume; // Volume-Wert zwischen 0 und 1 setzen
// }

// // Play-Button klicken
// playButton.addEventListener('click', function () {
//     playRadio();
// });

// // Pause-Button klicken
// pauseButton.addEventListener('click', function () {
//     pauseRadio();
// });

// // Stop-Button klicken
// stopButton.addEventListener('click', function () {
//     stopRadio();
// });
// });

// // Mute-Bild

// // Lautstärke-Element auswählen
// const volumeElement = document.querySelector('.lautstaerke-elemente');
// const volumeImage = document.querySelector('.lautstaerke-elemente img');

// // Funktion, die den Sound abstellt und das Bild ändert
// function toggleSoundAndImage() {
//     const radioPlayer = document.getElementById('radioPlayer');
//     radioPlayer.muted = !radioPlayer.muted;

//     // Bild ändern basierend auf dem stummen Zustand
//     if (radioPlayer.muted) {
//         volumeImage.src = 'images/volume-off.svg'; // Passe den Pfad zum Bild an
//     } else {
//         volumeImage.src = 'images/volume.svg'; // Passe den Pfad zum Bild an
//     }
// }

// // Eventlistener hinzufügen
// volumeElement.addEventListener('click', toggleSoundAndImage);
