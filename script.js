
let currentUser = null;

function getUtenti() {
  return JSON.parse(localStorage.getItem("utenti") || "{}");
}

function salvaUtenti(utenti) {
  localStorage.setItem("utenti", JSON.stringify(utenti));
}

function login() {
  const nome = document.getElementById("username").value;
  if (!nome) return alert("Inserisci un nome utente");
  const utenti = getUtenti();
  if (!utenti[nome]) utenti[nome] = { saldo: 100 };
  salvaUtenti(utenti);
  currentUser = nome;
  document.getElementById("utente").textContent = nome;
  document.getElementById("login").classList.add("hidden");
  document.getElementById("casino").classList.remove("hidden");
  aggiornaSaldo();
}

function logout() {
  currentUser = null;
  document.getElementById("casino").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
}

function updateSaldo(val) {
  const utenti = getUtenti();
  utenti[currentUser].saldo += val;
  salvaUtenti(utenti);
  aggiornaSaldo();
}

function aggiornaSaldo() {
  const utenti = getUtenti();
  document.getElementById("saldo").textContent = utenti[currentUser].saldo;
}

function mostraGioco(id) {
  document.querySelectorAll("#casino > div").forEach(d => d.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function mostraClassifica() {
  mostraGioco('classifica');
  const utenti = getUtenti();
  const lista = Object.entries(utenti).map(([nome, data]) => ({ nome, saldo: data.saldo }))
    .sort((a, b) => b.saldo - a.saldo).slice(0, 5);

  const ol = document.getElementById('listaClassifica');
  ol.innerHTML = '';
  lista.forEach(({ nome, saldo }) => {
    const li = document.createElement('li');
    li.innerHTML = (nome === currentUser) ? `<b>${nome}</b> - ${saldo}€` : `${nome} - ${saldo}€`;
    ol.appendChild(li);
  });
}

// Placeholder funzioni per i giochi
function giocaSlot() {
  updateSaldo(-10);
  const win = Math.random() > 0.7;
  document.getElementById("slotResult").textContent = win ? "Hai vinto 20€!" : "Hai perso!";
  if (win) updateSaldo(20);
}

function giocaGratta() {
  updateSaldo(-10);
  const win = Math.random() > 0.6;
  document.getElementById("grattaResult").textContent = win ? "Hai vinto 15€!" : "Hai perso!";
  if (win) updateSaldo(15);
}

function iniziaBlackjack() {
  updateSaldo(-10);
  document.getElementById("playerCards").textContent = "K, 7";
  document.getElementById("dealerCards").textContent = "J, 8";
  document.getElementById("playerSum").textContent = 17;
  document.getElementById("dealerSum").textContent = 18;
  document.getElementById("blackjackResult").textContent = "Hai perso!";
}

function pescaCarta() {
  document.getElementById("blackjackResult").textContent = "Hai sballato!";
}

function stai() {
  document.getElementById("blackjackResult").textContent = "Il banco ha vinto.";
}

function giocaRoulette(colore) {
  updateSaldo(-10);
  const vincita = Math.random() < 0.5 ? "rosso" : "nero";
  const risultato = colore === vincita ? "Hai vinto 20€!" : "Hai perso!";
  document.getElementById("rouletteResult").textContent = risultato;
  if (colore === vincita) updateSaldo(20);
}
