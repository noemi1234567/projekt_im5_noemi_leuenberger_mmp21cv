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
    <img src="images/news1.png" alt="News-1" width="280" height="100">
    <h2 class="titel-hover">Hallo1</h2>
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

        // das sind alle Artikel von der Gruppe Article2
    const newArticle2 = `
        <article class="news-artikel-hintergrund">
        <img src="images/news1.png" alt="News-1" width="280" height="100">
        <h2 class="titel-hover">Hallo2</h2>
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
