// Dropdown Menu Desktop
document.addEventListener("DOMContentLoaded", function () {
    // Dropdown
    const dropdownButton = document.querySelector(".dropdown .dropbtn");
    const dropdownContent = document.querySelector(".dropdown .dropdown-content");
    console.log(dropdownContent)

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


    // "Mehr laden" button
    const loadMoreButton = document.getElementById("load-more-button");

    let clickCount = 0;

    loadMoreButton.addEventListener('click', function () {
        clickCount++;
        console.log(clickCount)
        if (clickCount === 1) {
            loadMoreArticles(newArticle1);
        } else {
            loadMoreArticles(newArticle2);
            loadMoreButton.style.display = 'none';
        }
    });
});

// Slideshow
let slideIndex = 1;

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    showSlides((slideIndex += n));
}

showSlides(slideIndex);
setInterval(function () {
    plusSlides(1); // Advance to the next slide
}, 80000); // 8000 milliseconds = 3 seconds 


// das sind alle Artikel von der Gruppe Article1
const newArticle1 = `
    <article class="news-artikel-hintergrund">
    <img src="images/autoindustrie.png" alt="Autofabrik" width="280" height="100">
    <a href="artikel.html" class="decoration-titel"><h2 class="titel-hover">Neue Technologie revolutioniert die Autoindustrie</h2></a>
    <p>Eine bahnbrechende Technologie könnte die Art und Weise, wie Autos hergestellt und betrieben werden,
    grundlegend verändern.</p>
    <a href="artikel.html" class="button">zum Artikel</a>
  </article>
  <article class="news-artikel-hintergrund">
    <img src="images/diagnose.png" alt="Arzt erklärt einer Patientin etwas auf dem Tablet" width="280" height="100">
    <a href="artikel.html" class="decoration-titel"><h2 class="titel-hover">KI in der Medizin: Hoffnung auf bessere Diagnosen</h2></a>
    <p>Künstliche Intelligenz wird in der medizinischen Diagnose immer wichtiger und verspricht genauere und
    schnellere Ergebnisse.</p>
    <a href="artikel.html" class="button">zum Artikel</a>
  </article>
  <article class="news-artikel-hintergrund">
    <img src="images/pyramiden.png" alt="Pyramiden" width="280" height="100">
    <a href="artikel.html" class="decoration-titel"><h2 class="titel-hover">Neue Entdeckung enthüllt das Geheimnis der Pyramiden</h2></a>
    <p>Archäologen haben eine bahnbrechende Entdeckung gemacht, die das Rätsel der antiken ägyptischen
    Pyramiden aufdecken könnte.</p>
    <a href="artikel.html" class="button">zum Artikel</a>
  </article>
    `;

// das sind alle Artikel von der Gruppe Article2
const newArticle2 = `
        <article class="news-artikel-hintergrund">
        <img src="images/homeoffice.png" alt="Mann in Home Office" width="280" height="100">
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


// Funktion macht, dass die Artikel1 geladen werden 
function loadMoreArticles(newArticle) {
    console.log("articles loades");
    // Get the container for additional articles
    const additionalArticlesContainer = document.getElementById("additional-articles");

    // Add the new article to the container
    additionalArticlesContainer.insertAdjacentHTML('beforeend', newArticle);
}


