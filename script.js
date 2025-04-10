
function logout() {
  alert("Logout eseguito");
}
function giocaCoinflip() {
  const res = Math.random() < 0.5 ? "Testa" : "Croce";
  document.getElementById("coinflipResult").textContent = "Risultato: " + res;
}
function giocaSlot() {
  const simboli = ["🍒", "🍋", "7", "⭐"];
  const r1 = simboli[Math.floor(Math.random() * simboli.length)];
  const r2 = simboli[Math.floor(Math.random() * simboli.length)];
  const r3 = simboli[Math.floor(Math.random() * simboli.length)];
  let result = `${r1} ${r2} ${r3}`;
  if (r1 === r2 && r2 === r3) {
    result += " - Jackpot!";
  } else {
    result += " - Ritenta!";
  }
  document.getElementById("slotResult").textContent = result;
}
