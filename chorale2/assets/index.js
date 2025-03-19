/*menu burger*/
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

/*paroles bouton*/

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".toggle-lyrics").forEach((button) => {
    button.addEventListener("click", function () {
      let targetClass;

      if (this.classList.contains("translate")) {
        targetClass = "translate";
      } else if (this.classList.contains("phonetique")) {
        targetClass = "phonetic";
      } else {
        targetClass = "lyrics";
      }

      let targetElement = this.nextElementSibling;

      // Vérifie si l'élément est déjà visible
      let isVisible = targetElement.style.display === "block";

      // Cache toutes les autres sections du même type
      document.querySelectorAll(`.${targetClass}`).forEach((el) => {
        el.style.display = "none";
      });

      // Affiche ou cache la section ciblée
      targetElement.style.display = isVisible ? "none" : "block";
    });
  });
});
