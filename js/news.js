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

    // das sind alle Artikel von der Gruppe Article1
    const newArticle1 = `
    <article class="news-artikel-hintergrund">
    <img src="images/homeoffice.png" alt="News-1" width="280" height="100">
    <h2 class="titel-hover">Homeoffice: Herausforderungen und Chancen</h2>
    <p>Immer mehr Menschen arbeiten von zu Hause aus, was sowohl Chancen als auch Herausforderungen mit sich bringt.</p>
    <a href="artikel.html" class="button">zum Artikel</a>
  </article>
  <article class="news-artikel-hintergrund">
    <img src="images/upcycling.png" alt="News-1" width="280" height="100">
    <h2 class="titel-hover">Upcycling: Trend für eine nachhaltige Zukunft</h2>
    <p>Upcycling wird immer beliebter als kreative Möglichkeit, Abfall zu reduzieren und Ressourcen zu schonen.</p>
    <a href="artikel.html" class="button">zum Artikel</a>
  </article>
  <article class="news-artikel-hintergrund">
    <img src="images/flugzeug.png" alt="News-1" width="280" height="100">
    <h2 class="titel-hover">Elektrische Flugzeuge: Die Zukunft der Luftfahrt?</h2>
    <p>Elektrische Flugzeuge gewinnen an Popularität und könnten die Luftfahrtbranche revolutionieren.</p>
    <a href="artikel.html" class="button">zum Artikel</a>
  </article>
    `;

        // das sind alle Artikel von der Gruppe Article2
    const newArticle2 = `
        <article class="news-artikel-hintergrund">
        <img src="images/meditation.png" alt="News-1" width="280" height="100">
        <h2 class="titel-hover">Die Macht der Meditation: Stressabbau und innere Ruhe</h2>
        <p>Meditation erweist sich als wirksame Methode, um Stress abzubauen und innere Ruhe zu finden.</p>
        <a href="artikel.html" class="button">zum Artikel</a>
      </article>
      <article class="news-artikel-hintergrund">
        <img src="images/tiefsee.png" alt="News-1" width="280" height="100">
        <h2 class="titel-hover">Atlanktik: Neue Entdeckungen und faszinierende Kreaturen</h2>
        <p>Tiefseeforschung enthüllt erstaunliche Welten unter der Wasseroberfläche und faszinierende Lebewesen, die bisher unbekannt waren.</p>
        <a href="artikel.html" class="button">zum Artikel</a>
      </article>
      <article class="news-artikel-hintergrund">
        <img src="images/shopping.png" alt="News-1" width="280" height="100">
        <h2 class="titel-hover">Der Boom des Online-Shoppings</h2>
        <p>Der Trend zum Online-Shopping erreicht immer neue Höhen, da Verbraucher bequeme Einkaufsmöglichkeiten von zu Hause aus schätzen.</p>
        <a href="artikel.html" class="button">zum Artikel</a>
      </article>
        `;
    

    // Funktion macht, dass die Artikel1 geladen werden 
    function loadMoreArticles(newArticle) {
    
        // Get the container for additional articles
        const additionalArticlesContainer = document.getElementById("additional-articles");
    
        // Add the new article to the container
        additionalArticlesContainer.insertAdjacentHTML('beforeend', newArticle);
    }


    // event listener für den "Mehr laden" button hinzufügen
    const loadMoreButton = document.getElementById("load-more-button");

    let clickCount = 0;

    loadMoreButton.addEventListener('click', function() {
        clickCount++;
        // wenn der User einmal klickt, dann werden die Artikel1 geladen
        if(clickCount === 1){
            loadMoreArticles(newArticle1);
            // loadMoreButton.addEventListener("click", loadMoreArticles1);
        }
        else {
            // wenn der User zweimal klickt, dann werden die Artikel2 geladen und der Button verschwindet
            loadMoreArticles(newArticle2);
            loadMoreButton.style.display = 'none';
        }
    });
});

// JavaScript für die Steuerung des Radioplayers
var radioPlayer = document.getElementById('radioPlayer');
var playButton = document.querySelector('.play')
var pauseButton = document.querySelector('.pause')

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

function forwardRadio() {
    radioPlayer.currentTime += 10; // Vorwärts spulen um 10 Sekunden (kann angepasst werden)
}

function backwardRadio() {
    radioPlayer.currentTime -= 10; // Rückwärts spulen um 10 Sekunden (kann angepasst werden)
}

function setVolume(volume) {
    radioPlayer.volume = volume; // Volume-Wert zwischen 0 und 1 setzen
}

document.addEventListener("DOMContentLoaded", function () {
    // ... (dein bestehender Code)

// Radio Player
var radioPlayer = document.getElementById('radioPlayer');
var playButton = document.querySelector('.play-button');
var pauseButton = document.querySelector('.pause-button');
var stopButton = document.querySelector('.stop-button'); // Hier füge den Stop-Button hinzu

function playRadio() {
    radioPlayer.play();
}

function pauseRadio() {
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

// Stop-Button klicken
stopButton.addEventListener('click', function () {
    stopRadio();
});
});