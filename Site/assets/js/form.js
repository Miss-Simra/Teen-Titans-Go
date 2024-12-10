document.addEventListener("DOMContentLoaded", function () {
  // Chargement du DOM

  // Création de la vidéo

  // Récupère l'ID de la div pour placer la vidéo à l'intérieur
  var my_video = document.getElementById("myVideo");

  // Création d'une balise <iframe>
  var video = document.createElement("video");

  // Définit les attributs src de la vidéo
  video.src = "/assets/video/video.mp4"; // Lien vidéo local
  video.controls = true;
  video.width = "560"; // Largeur
  video.height = "315"; // Hauteur

  my_video.appendChild(video); // Ajoute la vidéo dans la div

  // Création des boutons 1/2

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

  // Les fonctions affichage et masquage

  // Fonction qui affiche la vidéo, fait disparaître le bouton 1, en affichant le bouton 2

  function show_hide() {
    // Affiche la vidéo
    my_video.style.display = "flex";
    video.style.opacity = 1;
    video.style.display = "block";
    video.play();
    // Lance la vidéo

    // Affiche le bouton 2
    my_button2.style.display = "flex";
    button2.style.opacity = 1;
    button2.style.display = "block";
  }

  // Fonction qui met en pause la vidéo en affichant le bouton 1

  function hide_elements() {
    my_button1.style.display = "flex"; // Affiche le bouton 1
    button1.style.opacity = 1;
    button1.style.display = "block";
    video.pause();
    // Met en pause la vidéo
  }

  // Récupère le bouton 1/2 et la vidéo
  var button1 = document.getElementById("myButton1").querySelector("button");
  var button2 = document.getElementById("myButton2").querySelector("button");
  var video = document.getElementById("myVideo").querySelector("video");

  // Fonction fade out -> Disparition progressive

  function fadeOutButton() {
    var opacity = 1; // Opacité au max
    var fadeOutInterval = setInterval(function () {
      if (opacity <= 0) {
        clearInterval(fadeOutInterval); // Stoppe l'intervalle une fois l'opacité à 0
        button1.style.display = "none"; // Cache le bouton quand il n'est plus visible
      }
      button1.style.opacity = opacity; // Applique l'opacité
      opacity -= 0.05; // Réduit l'opacité progressivement
    }, 50); // Chaque 50ms, réduit l'opacité de 0.05
  }

  // Appel la fonction fadeOutButton au clic du bouton 1
  button1.addEventListener("click", function () {
    fadeOutButton();
  });

  // Fonction fade-in pour le bouton 1 --> Apparition progressive
  function fadeIn() {
    var opacity = 0; // Opacité invisible

    button1.style.display = "block"; // Affiche le bouton
    button1.style.opacity = opacity; // Applique l'opacité

    // Intervalle pour appliquer le fade-in
    var fadeInInterval = setInterval(function () {
      if (opacity >= 1) {
        clearInterval(fadeInInterval); // Arrête l'intervalle une fois l'opacité à 1
      }
      opacity += 0.05; // Augmente l'opacité progressivement
      button1.style.opacity = opacity; // Applique l'opacité
    }, 50); // Chaque 50ms, augmente l'opacité de 0.05
  }

  // Appel de la fonction fadeIn au clic du bouton 2
  button2.addEventListener("click", fadeIn);

  // Fonction fade-out pour le bouton -> Disparition progressive
  function fadeOutButton2() {
    var opacity = 1; // Opacité au max
    var fadeOutInterval = setInterval(function () {
      if (opacity <= 0) {
        clearInterval(fadeOutInterval); // Stoppe l'intervalle une fois l'opacité à 0
        button2.style.display = "none"; // Cache le bouton quand il n'est plus visible
      }
      button2.style.opacity = opacity; // Applique l'opacité
      opacity -= 0.05; // Réduit l'opacité progressivement
    }, 50); // Chaque 50ms, réduit l'opacité de 0.05
  }

  // Fonction fade-out pour la vidéo -> Disparition progressive
  function fadeOutVideo() {
    var opacity = 1; // Opacité au max
    var fadeOutInterval = setInterval(function () {
      if (opacity <= 0) {
        clearInterval(fadeOutInterval); // Stoppe l'intervalle une fois l'opacité à 0
        video.style.display = "none"; // Cache la vidéo quand il n'est plus visible
      }
      video.style.opacity = opacity; // Applique l'opacité
      opacity -= 0.05; // Réduit l'opacité progressivement
    }, 50); // Chaque 50ms, réduit l'opacité de 0.05
  }

  // Appel des fonctions fadeOutButton2 et fadeOutVideo au clic du bouton 2
  button2.addEventListener("click", function () {
    fadeOutButton2();
    fadeOutVideo();
  });

  // Fonction fade-inElements pour le bouton 2 et la vidéo --> Apparition progressive
  function fadeInElements() {
    var opacity = 0; // Opacité au max

    button2.style.display = "block"; // Affiche le bouton 2
    video.style.display = "block"; // Affiche la vidéo

    // Applique l'opacité
    button2.style.opacity = opacity;
    video.style.opacity = opacity;

    // Intervalle pour appliquer le fade-in
    var fadeInInterval = setInterval(function () {
      if (opacity >= 1) {
        clearInterval(fadeInInterval); // Arrête l'intervalle une fois l'opacité à 1
      }
      opacity += 0.05; // Augmente l'opacité progressivement
      button2.style.opacity = opacity; // Applique l'opacité au bouton 2
      video.style.opacity = opacity; // Applique l'opacité à la vidéo
    }, 50); // Chaque 50ms, augmente l'opacité de 0.05
  }

  // Appel de la fonction fadeInElements au clic du bouton 1
  button1.addEventListener("click", fadeInElements);
});
