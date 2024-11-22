$(document).ready(function () {
  // Evènement au clic du bouton Menu
  $(".menu.button").on("click", function () {
    // Ajout de la classe active pour afficher le menu
    $(".sidebar").toggleClass("active");
    // Classe devient visible
    $(".active").show();
    // Bouton devient visible
    $(".close.button").show();
  });

  // Evènement au clic du bouton Fermer
  $(".close.button").on("click", function () {
    // Retire la classe pour masquer le menu
    $(".sidebar").removeClass(".active");
    // Classe devient caché
    $(".active").hide();
    // Bouton devient caché
    $(".close.button").hide();
  });
});
