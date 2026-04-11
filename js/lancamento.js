const anoAtual = new Date().getFullYear();
const anoLancamento = 2026;

if (anoAtual === anoLancamento) {
    alert("🎉 GRANDE LANÇAMENTO!");
} else if (anoAtual > anoLancamento) {
    alert("✨ O jogo já foi lançado em 2026! Aproveite essa jornada incrível 🎮");
}