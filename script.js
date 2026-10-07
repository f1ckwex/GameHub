
const filterButtons = document.querySelectorAll(".filter");
const games = document.querySelectorAll(".game");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const genre = button.dataset.filter;

    filterButtons.forEach(function (b) {
      b.classList.remove("active");
    });
    button.classList.add("active");

    games.forEach(function (game) {
      const show = genre === "all" || game.dataset.genre === genre;
      game.classList.toggle("hidden", !show);
    });
  });
});

const tilt = document.getElementById("tilt");
const tiltCard = document.getElementById("tiltCard");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
  tilt.addEventListener("mousemove", function (e) {
    const rect = tilt.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    tiltCard.style.transform =
      "rotateY(" + x * 16 + "deg) rotateX(" + -y * 16 + "deg)";
  });

  tilt.addEventListener("mouseleave", function () {
    tiltCard.style.transform = "rotateY(0) rotateX(0)";
  });
}

const form = document.getElementById("form");
const note = document.getElementById("note");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  note.textContent = "Готово! Проверь почту: " + document.getElementById("email").value;
  form.reset();
});
