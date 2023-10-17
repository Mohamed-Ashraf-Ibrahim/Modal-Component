"use strict";
const subBtn = document.getElementById("submit");
const closeBtn = document.getElementById("close-btn");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const OpenModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

subBtn.addEventListener("click", function () {
  OpenModal();
});

closeBtn.addEventListener("click", function () {
  closeModal();
});

overlay.addEventListener("click", function () {
  closeModal();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
