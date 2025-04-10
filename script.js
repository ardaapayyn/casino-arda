let utenti = JSON.parse(localStorage.getItem("utenti") || "{}");
let utenteCorrente = null;

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (!user || !pass) return alert("Inserisci nome e password");
  if (!utenti[user]) {
    utenti[user] = { password: pass, saldo: 100 };
  } else if (utenti[user].password !== pass) {
    return alert("Password errata");
  }
  utenteCorrente = user;
  localStorage.setItem("utenti", JSON.stringify(utenti));
  document.getElementById("loginScreen").classList.add("hidden");
  document.getElementById("casinoApp").classList.remove("hidden");
  document.getElementById("userDisplay").textContent = utenteCorrente;
  aggiornaSaldo();
}
function logout() {
  utenteCorrente = null;
  document.getElementById("casinoApp").classList.add("hidden");
  document.getElementById("loginScreen").classList.remove("hidden");
}
function aggiornaSaldo() {
  document.getElementById("saldoDisplay").textContent = utenti[utenteCorrente].saldo;
}
function openGame(id) {
  document.querySelectorAll(".game").forEach(el => el.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}
function playSlot() {
  let bet = parseInt(document.getElementById("betSlot").value);
  if (utenti[utenteCorrente].saldo < bet) return alert("Saldo insufficiente");
  utenti[utenteCorrente].saldo -= bet;
  let win = Math.random() > 0.6;
  if (win) utenti[utenteCorrente].saldo += bet * 2;
  document.getElementById("slotResult").textContent = win ? "Hai vinto!" : "Hai perso!";
  aggiornaSaldo();
  localStorage.setItem("utenti", JSON.stringify(utenti));
}
function playBlackjack() {
  let bet = parseInt(document.getElementById("betBJ").value);
  if (utenti[utenteCorrente].saldo < bet) return alert("Saldo insufficiente");
  utenti[utenteCorrente].saldo -= bet;
  let win = Math.random() > 0.5;
  if (win) utenti[utenteCorrente].saldo += bet * 2;
  document.getElementById("bjResult").textContent = win ? "Blackjack! Hai vinto!" : "Hai perso!";
  aggiornaSaldo();
  localStorage.setItem("utenti", JSON.stringify(utenti));
}
function playGratta() {
  let bet = parseInt(document.getElementById("betGratta").value);
  if (utenti[utenteCorrente].saldo < bet) return alert("Saldo insufficiente");
  utenti[utenteCorrente].saldo -= bet;
  let win = Math.random() > 0.4;
  if (win) utenti[utenteCorrente].saldo += bet * 3;
  document.getElementById("grattaResult").textContent = win ? "Hai vinto gratta e vinci!" : "Hai perso!";
  aggiornaSaldo();
  localStorage.setItem("utenti", JSON.stringify(utenti));
}
function playRoulette(color) {
  let bet = parseInt(document.getElementById("betRoulette").value);
  if (utenti[utenteCorrente].saldo < bet) return alert("Saldo insufficiente");
  utenti[utenteCorrente].saldo -= bet;
  let result = Math.random() > 0.5 ? "rosso" : "nero";
  let win = result === color;
  if (win) utenti[utenteCorrente].saldo += bet * 2;
  document.getElementById("rouletteResult").textContent = win ? "Hai vinto su " + result + "!" : "Hai perso, era " + result;
  aggiornaSaldo();
  localStorage.setItem("utenti", JSON.stringify(utenti));
}
