document.addEventListener("DOMContentLoaded", function () {
  // Chargement du DOM

  // CREATION VIDEO

  // Récupère l'ID de la div pour placer la vidéo à l'intérieur
  var my_video = document.getElementById("myVideo");

  // Création d'une balise <video>
  var video = document.createElement("video");

  // Définit les attributs src de la vidéo
  video.src = "/assets/video/video.mp4"; // Lien vidéo local
  video.controls = true;
  video.width = "560"; // Largeur
  video.height = "315"; // Hauteur

  my_video.appendChild(video); // Ajoute la vidéo dans la div

  //
  //
  //
  //
  //

  // CREATION BOUTONS 1/2

  // Récupère l'ID de la div pour placer le bouton à l'intérieur
  var my_button1 = document.getElementById("myButton1");
  // Ajout d'un évènement au clic du bouton 1, en créant une fonction "show_hide"
  my_button1.addEventListener("click", show_hide);

  var button1 = document.createElement("button"); // Création d'une balise <button>
  button1.innerText = "Découvrez les super-pouvoirs"; // Définit le texte du bouton
  button1.type = "button"; // Définit le type du bouton
  my_button1.appendChild(button1); // Ajoute le bouton dans la div

  // Récupère l'ID de la div pour placer le bouton à l'intérieur
  var my_button2 = document.getElementById("myButton2");
  // Ajout d'un évènement au clic du bouton 2, en créant une fonction "hide_elements"
  my_button2.addEventListener("click", hide_elements);

  var button2 = document.createElement("button"); // Création d'une balise <button>
  button2.innerText = "Revenir au formulaire"; // Définit le texte du bouton
  button2.type = "button"; // Définit le type du bouton
  my_button2.appendChild(button2); // Ajoute le bouton dans la div

  // Récupère l'ID de l'image
  var img = document.getElementById("img_form");

  //
  //
  //
  //
  //

  // FONCTIONS : AFFICHAGE & MASQUAGE

  // Fonction qui affiche la vidéo, fait disparaître le bouton 1, en affichant le bouton 2

  function show_hide() {
    my_video.style.display = "flex"; // Affiche la vidéo
    video.style.opacity = 0;
    video.style.display = "block";
    video.play(); // Lance la vidéo

    // Affiche le bouton 2
    my_button2.style.display = "flex";
    button2.style.opacity = 0;
    button2.style.display = "block";
  }

  // Fonction qui met en pause la vidéo en affichant le bouton 1

  function hide_elements() {
    my_button1.style.display = "flex"; // Affiche le bouton 1
    button1.style.opacity = 0;
    button1.style.display = "block";
    video.pause(); // Met en pause la vidéo
  }

  //
  //
  //
  //
  //

  // Récupère le bouton 1/2 et la vidéo
  var button1 = document.getElementById("myButton1").querySelector("button");
  var button2 = document.getElementById("myButton2").querySelector("button");
  var video = document.getElementById("myVideo").querySelector("video");

  //
  //
  //
  //
  //

  // FONCTIONS EFFET APPARITION & DISPARITION

  // Fonction fade-out pour le bouton 1 et l'image
  function fadeOutButtonAndImage() {
    var opacity = 1;

    var fadeOutInterval = setInterval(function () {
      if (opacity <= 0) {
        clearInterval(fadeOutInterval); // Stoppe l'intervalle quand l'opacité atteint 0
        button1.style.display = "none"; // Masque le bouton 1
        img_form.style.display = "none"; // Masque l'image
      }
      button1.style.opacity = opacity; // Applique l'opacité au bouton 1
      img_form.style.opacity = opacity; // Applique l'opacité à l'image
      opacity -= 0.05; // Réduit progressivement l'opacité
    }, 50); // Réduction toutes les 50ms
  }

  //
  //
  //
  //
  //

  // Fonction fade-in pour le bouton 1 et l'image
  function fadeInButtonAndImage() {
    var opacity = 0;

    // Affiche le bouton 1 et l'image
    button1.style.display = "block";
    img_form.style.display = "block";

    // Applique l'opacité
    button1.style.opacity = opacity;
    img_form.style.opacity = opacity;

    var fadeInInterval = setInterval(function () {
      if (opacity >= 1) {
        clearInterval(fadeInInterval); // Stoppe l'intervalle quand l'opacité atteint 1
      }
      opacity += 0.05; // Augmente progressivement l'opacité
      button1.style.opacity = opacity; // Applique l'opacité au bouton 1
      img_form.style.opacity = opacity; // Applique l'opacité à l'image
    }, 50); // Augmentation toutes les 50ms
  }

  button1.addEventListener("click", fadeOutButtonAndImage); // Clic sur bouton 1 -> disparition du bouton 1 et de l'image
  button2.addEventListener("click", fadeInButtonAndImage); // Clic sur bouton 2 -> apparition du bouton 1 et de l'image

  //
  //
  //
  //
  //
  //

  // Fonction fadeOutElements pour le bouton et la vidéo -> Disparition progressive bouton/vidéo
  function fadeOutElements2() {
    var opacity = 1; // Opacité au max

    var fadeOutInterval = setInterval(function () {
      if (opacity <= 0) {
        clearInterval(fadeOutInterval); // Stoppe l'intervalle une fois l'opacité à 0
        button2.style.display = "none"; // Masque le bouton 2
        video.style.display = "none"; // Masque la vidéo
      }
      // Applique l'opacité
      button2.style.opacity = opacity;
      video.style.opacity = opacity;
      opacity -= 0.05; // Réduit l'opacité progressivement
    }, 50); // Chaque 50ms, réduit l'opacité de 0.05
  }

  // Appel de la fonction fadeOutElements au clic du bouton 2
  button2.addEventListener("click", fadeOutElements2);

  //
  //
  //
  //
  //

  // Fonction fadeInElements pour le bouton 2 et la vidéo --> Apparition progressive bouton/vidéo
  function fadeInElements2() {
    var opacity = 0; // Opacité au max

    button2.style.display = "block"; // Affiche le bouton 2
    video.style.display = "block"; // Affiche la vidéo

    // Applique l'opacité
    button2.style.opacity = opacity;
    video.style.opacity = opacity;

    // Intervalle pour appliquer le fade-in
    var fadeInInterval = setInterval(function () {
      if (opacity >= 1) {
        clearInterval(fadeInInterval); // Stoppe l'intervalle une fois l'opacité à 1
      }
      opacity += 0.05; // Augmente l'opacité progressivement
      button2.style.opacity = opacity; // Applique l'opacité au bouton 2
      video.style.opacity = opacity; // Applique l'opacité à la vidéo
    }, 50); // Chaque 50ms, augmente l'opacité de 0.05
  }

  // Appel de la fonction fadeInElements2 au clic du bouton 1
  button1.addEventListener("click", fadeInElements2);
});
