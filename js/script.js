let slideIndex = 1;
if (document.querySelector(".mySlides")) {
  showSlides(slideIndex);
  // setInterval(function () {
  //   plusSlides(1); // Advance to the next slide
  // }, 3000); // 3000 milliseconds = 3 seconds 

}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Automatically advance the slideshow every 3 seconds

// Funktion, dass beim Klick auf "mehr laden" mehr Artikel geladen und angezeigt werden
function loadMoreArticles() {
  // Simulate loading new articles
  const newArticle = `
  <article class="news-artikel-hintergrund">
  <img src="images/news1.png" alt="News-1" width="280" height="100">
  <h2 class="titel-hover">Noemi</h2>
  <p>Hier kommt der Lead. Hier steht dann ganz grob um was es in dem Artikel geht,
      sodass die Leute dann unten auf den Button clicken, damit sie weiterlesen können.</p>
  <a href="artikel.html" class="button">zum Artikel</a>
</article>
<article class="news-artikel-hintergrund">
  <img src="images/news1.png" alt="News-1" width="280" height="100">
  <h2 class="titel-hover">Schlagzeile</h2>
  <p>Hier kommt der Lead. Hier steht dann ganz grob um was es in dem Artikel geht,
      sodass die Leute dann unten auf den Button clicken, damit sie weiterlesen können.</p>
  <a href="artikel.html" class="button">zum Artikel</a>
</article>
<article class="news-artikel-hintergrund">
  <img src="images/news1.png" alt="News-1" width="280" height="100">
  <h2 class="titel-hover">Schlagzeile</h2>
  <p>Hier kommt der Lead. Hier steht dann ganz grob um was es in dem Artikel geht,
      sodass die Leute dann unten auf den Button clicken, damit sie weiterlesen können.</p>
  <a href="artikel.html" class="button">zum Artikel</a>
</article>

  `;

  // Get the container for additional articles
  const additionalArticlesContainer = document.getElementById("additional-articles");

  // Add the new article to the container
  additionalArticlesContainer.insertAdjacentHTML('beforeend', newArticle);
}


// event listener für den "Mehr laden" button hinzufügen
const loadMoreButton = document.getElementById("load-more-button");
console.log(loadMoreButton);
loadMoreButton.addEventListener("click", loadMoreArticles);


