// Dropdown Menu Desktop
document.addEventListener("DOMContentLoaded", function () {
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

    // das sind alle Artikel von der Gruppe Article1
    const newArticle1 = `
    <article class="news-artikel-hintergrund">
    <img src="images/homeoffice.png" alt="Mann im Home Office" width="280" height="100">
    <a href="artikel.html" class="decoration-titel"><h2 class="titel-hover">Homeoffice: Herausforderungen und Chancen</h2></a>
    <p>Immer mehr Menschen arbeiten von zu Hause aus, was sowohl Chancen als auch Herausforderungen mit sich bringt.</p>
    <a href="artikel.html" class="button">zum Artikel</a>
  </article>
  <article class="news-artikel-hintergrund">
    <img src="images/upcycling.png" alt="Frau zerschneidet Stoff" width="280" height="100">
    <a href="artikel.html" class="decoration-titel"><h2 class="titel-hover">Upcycling: Trend für eine nachhaltige Zukunft</h2></a>
    <p>Upcycling wird immer beliebter als kreative Möglichkeit, Abfall zu reduzieren und Ressourcen zu schonen.</p>
    <a href="artikel.html" class="button">zum Artikel</a>
  </article>
  <article class="news-artikel-hintergrund">
    <img src="images/flugzeug.png" alt="Flugzeug Turbine" width="280" height="100">
    <a href="artikel.html" class="decoration-titel"><h2 class="titel-hover">Elektrische Flugzeuge: Die Zukunft der Luftfahrt?</h2></a>
    <p>Elektrische Flugzeuge gewinnen an Popularität und könnten die Luftfahrtbranche revolutionieren.</p>
    <a href="artikel.html" class="button">zum Artikel</a>
  </article>
    `;

    // das sind alle Artikel von der Gruppe Article2
    const newArticle2 = `
        <article class="news-artikel-hintergrund">
        <img src="images/meditation.png" alt="Frau am meditieren" width="280" height="100">
        <a href="artikel.html" class="decoration-titel"><h2 class="titel-hover">Die Macht der Meditation: Stressabbau und innere Ruhe</h2></a>
        <p>Meditation erweist sich als wirksame Methode, um Stress abzubauen und innere Ruhe zu finden.</p>
        <a href="artikel.html" class="button">zum Artikel</a>
      </article>
      <article class="news-artikel-hintergrund">
        <img src="images/tiefsee.png" alt="Fisch im dunklen Meer" width="280" height="100">
        <a href="artikel.html" class="decoration-titel"><h2 class="titel-hover">Atlanktik: Neue Entdeckungen und faszinierende Kreaturen</h2></a>
        <p>Tiefseeforschung enthüllt erstaunliche Welten unter der Wasseroberfläche und faszinierende Lebewesen, die bisher unbekannt waren.</p>
        <a href="artikel.html" class="button">zum Artikel</a>
      </article>
      <article class="news-artikel-hintergrund">
        <img src="images/shopping.png" alt="Mann mit Kreditkarte vor dem Laptop" width="280" height="100">
        <a href="artikel.html" class="decoration-titel"><h2 class="titel-hover">Der Boom des Online-Shoppings</h2></a>
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

    loadMoreButton.addEventListener('click', function () {
        clickCount++;
        // wenn der User einmal klickt, dann werden die Artikel1 geladen
        if (clickCount === 1) {
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


// Radio Player
var radioPlayerNews = document.getElementById('radioPlayerNews');
var playButtonNews = document.querySelector('.playNews');
var pauseButtonNews = document.querySelector('.pauseNews');
var forwardButtonNews = document.querySelector('.vorwaertsNews');
var backwardButtonNews = document.querySelector('.rueckwaertsNews');
var setVolumeVariableNews = document.querySelector('.lautstaerke-elementeNews');
var volumeNews = document.querySelector('.range-laustärkeNews');
// var stopButton = document.querySelector('.stop-button'); // Hier füge den Stop-Button hinzu

function playRadio() {
    playButtonNews.style.display = "none";
    pauseButtonNews.style.display = "block";
    radioPlayerNews.play();
}

function pauseRadio() {
    playButtonNews.style.display = "block";
    pauseButtonNews.style.display = "none";
    radioPlayerNews.pause();
}

function stopRadio() {
    radioPlayerNews.pause();
    radioPlayerNews.currentTime = 0;
}

function forwardRadio() {
    radioPlayerNews.currentTime += 10; // Vorwärts spulen um 10 Sekunden (kann angepasst werden)
}

function backwardRadio() {
    radioPlayerNews.currentTime -= 10; // Rückwärts spulen um 10 Sekunden (kann angepasst werden)
}

function setVolume(volume) {
    radioPlayerNews.volume = volume; // Volume-Wert zwischen 0 und 1 setzen
}

// Play-Button klicken
playButtonNews.addEventListener('click', function () {
    playRadio();
});

// Pause-Button klicken
pauseButtonNews.addEventListener('click', function () {
    pauseRadio();
});

// Vorwärts-Button klicken
forwardButtonNews.addEventListener('click', function () {
    forwardRadio();
});

// Rückwärts-Button klicken
backwardButtonNews.addEventListener('click', function () {
    backwardRadio();
});

// mute-Bild wenn Regler ganz links
volumeNews.addEventListener('input', function () {
    let laustärke = volumeNews.value;
    if (laustärke == 0) {
        volumeImage.src = 'images/volume-off.svg'; // Passe den Pfad zum Bild an
        setVolume(laustärke);
    } else {
        volumeImage.src = 'images/volume.svg'; // Passe den Pfad zum Bild an
        setVolume(laustärke);
    }
});

