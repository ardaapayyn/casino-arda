function logout() {
  localStorage.removeItem("loggedUser");
  location.href = "index.html";
}

const user = localStorage.getItem("loggedUser");
const users = JSON.parse(localStorage.getItem("users") || "{}");

if (!user || !users[user]) {
  location.href = "index.html";
}

document.getElementById("welcome").textContent = "Benvenuto, " + user;
document.getElementById("saldo").textContent = users[user].saldo;

function aggiornaSaldo(newSaldo) {
  users[user].saldo = newSaldo;
  localStorage.setItem("users", JSON.stringify(users));
  document.getElementById("saldo").textContent = newSaldo;
}

function giocaCoinflip() {
  const risultato = Math.random() < 0.5 ? "Testa" : "Croce";
  document.getElementById("coinflipRisultato").textContent = "È uscito: " + risultato;
  aggiornaSaldo(users[user].saldo + 5);
}

function giocaSlot() {
  const simboli = ["🍒", "🍋", "7", "⭐"];
  const r1 = simboli[Math.floor(Math.random() * simboli.length)];
  const r2 = simboli[Math.floor(Math.random() * simboli.length)];
  const r3 = simboli[Math.floor(Math.random() * simboli.length)];

  let output = `${r1} ${r2} ${r3}`;
  if (r1 === r2 && r2 === r3) {
    output += " - Hai vinto 50!";
    aggiornaSaldo(users[user].saldo + 50);
  } else {
    output += " - Ritenta!";
    aggiornaSaldo(users[user].saldo - 10);
  }
  document.getElementById("slotRisultato").textContent = output;
}
