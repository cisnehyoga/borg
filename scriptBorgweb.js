"use strict";
const poesia = document.querySelector(".poesia");
const relato = document.querySelector(".relato");
const ensayo = document.querySelector(".ensayo");

// s
// const audioRelato = document.getElementById(".audio-relato");
// const audioEnsayo = document.getElementById(".audio-ensayo");

const overlayPoesia = document.querySelector(".overlay-poesia");
const overlayRelato = document.querySelector(".overlay-relato");
const overlayEnsayo = document.querySelector(".overlay-ensayo");

const botonCerrarPoesia = document.querySelector(".close-poesia");
const botonCerrarRelato = document.querySelector(".close-relato");
const botonCerrarEnsayo = document.querySelector(".close-ensayo");

const botonAbrirPoesia = document.querySelector(".show-poesia");
const botonAbrirRelato = document.querySelector(".show-relato");
const botonAbrirEnsayo = document.querySelector(".show-ensayo");

const cerrarPoesia = function () {
  poesia.classList.add("hidden");
  overlayPoesia.classList.add("hidden");
};

const cerrarRelato = function () {
  relato.classList.add("hidden");
  overlayRelato.classList.add("hidden");
};

const cerrarEnsayo = function () {
  ensayo.classList.add("hidden");
  overlayEnsayo.classList.add("hidden");
};

const abrirPoesia = function () {
  poesia.classList.remove("hidden");
  overlayPoesia.classList.remove("hidden");
};

const abrirRelato = function () {
  relato.classList.remove("hidden");
  overlayRelato.classList.remove("hidden");
};

const abrirEnsayo = function () {
  ensayo.classList.remove("hidden");
  overlayEnsayo.classList.remove("hidden");
};

// const detenerReproduccionPoesia = function () {
//   audioPoesia.pause();
// };

botonAbrirPoesia.addEventListener("click", abrirPoesia);
botonAbrirRelato.addEventListener("click", abrirRelato);
botonAbrirEnsayo.addEventListener("click", abrirEnsayo);

botonCerrarPoesia.addEventListener("click", cerrarPoesia);
overlayPoesia.addEventListener("click", cerrarPoesia);

botonCerrarRelato.addEventListener("click", cerrarRelato);
overlayRelato.addEventListener("click", cerrarRelato);

botonCerrarEnsayo.addEventListener("click", cerrarEnsayo);
overlayEnsayo.addEventListener("click", cerrarEnsayo);

document.addEventListener("keydown", function (event) {
  if (event.key == "Escape" && !poesia.classList.contains("hidden"))
    cerrarPoesia();
});

document.addEventListener("keydown", function (event) {
  if (event.key == "Escape" && !relato.classList.contains("hidden"))
    cerrarRelato();
});

document.addEventListener("keydown", function (event) {
  if (event.key == "Escape" && !ensayo.classList.contains("hidden"))
    cerrarEnsayo();
});
