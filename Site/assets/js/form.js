document.addEventListener("DOMContentLoaded", function () {
  // Chargement du DOM

  // Création de la vidéo

  // Récupère l'ID de la div pour placer la vidéo à l'intérieur
  var my_video = document.getElementById("myVideo");

  // Création d'une balise <iframe>
  var video = document.createElement("iframe");

  // Définit les attributs src de la vidéo
  video.src = "https://www.youtube.com/embed/FNNlWqYJRT0"; // Lien YouTube
  video.width = "560"; // Largeur
  video.height = "315"; // Hauteur
  video.allow = "fullscreen"; // Autorise en grand écran la vidéo

  my_video.appendChild(video); // Ajoute la vidéo dans la div

  // Création des boutons 1/2

  // Récupère l'ID de la div pour placer le bouton à l'intérieur
  var my_button1 = document.getElementById("myButton1");
  // Ajoout d'un évènement au clic du bouton 1, en créant une fonction "show_hide"
  my_button1.addEventListener("click", show_hide);

  var button1 = document.createElement("button"); // Création d'une balise <button>
  button1.innerText = "Découvrez les super-pouvoirs"; // Définit le texte du bouton
  button1.type = "button"; // Définit le type du bouton
  my_button1.appendChild(button1); // Ajoute le bouton dans la div

  // Récupère l'ID de la div pour placer le bouton à l'intérieur
  var my_button2 = document.getElementById("myButton2");
  // Ajoot d'un évènement au clic du bouton 2, en créant une fonction "hide_elements"
  my_button2.addEventListener("click", hide_elements);

  var button2 = document.createElement("button"); // Création d'une balise <button>
  button2.innerText = "Revenir au formulaire"; // Définit le texte du bouton
  button2.type = "button"; // Définit le type du bouton
  my_button2.appendChild(button2); // Ajoute le bouton dans la div

  // Les fonctions affichage et masquage

  // Fonction qui affiche la vidéo, fait disparaître le bouton 1, en affichant le bouton 2

  function show_hide() {
    my_video.style.display = "block"; // Affiche la div contenant la vidéo

    my_button1.style.display = "none"; // Masque le bouton 1

    my_button2.style.display = "block"; // Affiche le bouton 2
  }

  // Fonction qui fait disparaître la vidéo et le bouton 2, en affichant le bouton 1

  function hide_elements() {
    my_video.style.display = "none"; // Masque la vidéo

    my_button2.style.display = "none"; // Masque le bouton 2

    my_button1.style.display = "flex"; // Affiche le bouton 1
  }
});
