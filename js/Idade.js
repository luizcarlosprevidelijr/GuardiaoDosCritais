function verificarIdade() {
  let idade = Number(prompt("digite sua idade:"));
  let area = document.getElementById("areaJogo");

  if (idade >= 12) {
    alert("Acesso liberado ao conteúdo sensível.");
    area.style.filter = "blur(0px)";
    area.style.pointerEvents = "auto";
  } else {
    alert("Acesso negado, somente para maiores de 12 anos.");
  }
}

