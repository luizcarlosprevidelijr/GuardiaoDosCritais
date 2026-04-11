function trocarTema() {
  document.body.classList.toggle("light-mode");

  const emoji = document.querySelector(".emoji");
  const texto = document.querySelector(".texto");

  if (!emoji || !texto) return; 

  if (document.body.classList.contains("light-mode")) {
    emoji.textContent = "☀️";
    texto.textContent = "Tema Claro";
    localStorage.setItem("tema", "light");
  } else {
    emoji.textContent = "🌙";
    texto.textContent = "Tema Escuro";
    localStorage.setItem("tema", "dark");
  }
}

window.onload = function () {
  const temaSalvo = localStorage.getItem("tema");

  const emoji = document.querySelector(".emoji");
  const texto = document.querySelector(".texto");

  if (!emoji || !texto) return;

  if (temaSalvo === "light") {
    document.body.classList.add("light-mode");
    emoji.textContent = "☀️";
    texto.textContent = "Tema Claro";
  } else {
    emoji.textContent = "🌙";
    texto.textContent = "Tema Escuro";
  }
};