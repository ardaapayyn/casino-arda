let utenti = JSON.parse(localStorage.getItem("utenti") || "{}");

function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.add("hidden"));
  document.getElementById(tabId).classList.remove("hidden");
}

function register() {
  const email = document.getElementById("regEmail").value;
  const user = document.getElementById("regUser").value;
  const pass = document.getElementById("regPass").value;
  if (!email || !user || !pass) {
    document.getElementById("regMsg").textContent = "Compila tutti i campi";
    return;
  }
  if (utenti[user]) {
    document.getElementById("regMsg").textContent = "Utente già registrato";
    return;
  }
  utenti[user] = { email: email, password: pass, saldo: 100 };
  localStorage.setItem("utenti", JSON.stringify(utenti));
  document.getElementById("regMsg").textContent = "Registrazione completata!";
}

function login() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;
  if (!user || !pass) {
    document.getElementById("loginMsg").textContent = "Inserisci tutti i campi";
    return;
  }
  if (!utenti[user]) {
    document.getElementById("loginMsg").textContent = "Utente non trovato";
    return;
  }
  if (utenti[user].password !== pass) {
    document.getElementById("loginMsg").textContent = "Password errata";
    return;
  }
  document.getElementById("loginMsg").textContent = "Accesso riuscito. Benvenuto " + user;
}

function recoverPassword() {
  const user = document.getElementById("recoverUser").value;
  if (!utenti[user]) {
    document.getElementById("recoverMsg").textContent = "Utente non trovato";
    return;
  }
  document.getElementById("recoverMsg").textContent = "Password: " + utenti[user].password;
}
