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
      }, 10000); // 3000 milliseconds = 3 seconds 
      
});

