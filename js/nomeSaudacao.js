function mostrarMensagem() {
  let nome = document.getElementById("nome").value;

  if (nome === "") {
    document.getElementById("mensagem").innerText = "Digite um nome!";
  } else {
    document.getElementById("mensagem").innerText =
      "Olá, " +
      nome +
      "! Seja bem-vindo!  O destino do mundo está em suas mãos... prepare-se!";
  }
}
