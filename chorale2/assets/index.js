document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("nav-links");

  burger.addEventListener("click", function () {
    navLinks.classList.toggle("active"); // Ouvre/Ferme le menu
  });
});
/*flipcard*/
document.addEventListener("DOMContentLoaded", function () {
  function toggleFlipOnClick() {
    if (window.innerWidth <= 767) {
      document.querySelectorAll(".card").forEach((card) => {
        card.addEventListener("click", () => {
          card.classList.toggle("flipped");
        });
      });
    }
  }
  toggleFlipOnClick(); //Applique au chargement
  //vérifier si la taille change (rotation d'ecran par exemple)
  window.addEventListener("resize", () => {
    document.querySelectorAll(".card").forEach((card) => {
      card.classList.remove("flipped"); //reset en cas de changement d'écran
    });
    toggleFlipOnClick();
  });
});
