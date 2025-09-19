
console.log("App.js chargé");
const API = "http://localhost:5678/api/works";

const gallery = document.querySelector(".gallery");
let allWorks = [];

function displayWorks(works) {
  gallery.innerHTML = "";
  works.forEach((work) => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = work.imageUrl;
    img.alt = work.title;

    const caption = document.createElement("figcaption");
    caption.textContent = work.title;
    figure.appendChild(img);
    figure.appendChild(caption);
    gallery.appendChild(figure);
  });
}

fetch(API)
  .then((response) => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  })

  .then((data) => {
    allWorks = data;
    console.log(allWorks);
    displayWorks(allWorks);
    console.log("premier lien image =", allWorks[0].imageUrl);
  })

  .catch((error) => {
    console.error("Erreur :", error);
  });
