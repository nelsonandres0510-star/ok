const imagenes = [
    "img/4.jpg",
    "img/2.jpg",
    "img/3.jpg",
];

let index = 0;

const img = document.getElementById("imgProyecto");

document.querySelector(".up").addEventListener("click", () => {
    index--;
    if (index < 0) index = imagenes.length - 1;
    img.src = imagenes[index];
});

document.querySelector(".down").addEventListener("click", () => {
    index++;
    if (index >= imagenes.length) index = 0;
    img.src = imagenes[index];
});
