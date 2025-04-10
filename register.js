function register() {
  const email = document.getElementById("email").value;
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
  const users = JSON.parse(localStorage.getItem("users") || "{}");

  if (users[user]) {
    document.getElementById("msg").textContent = "Utente già registrato.";
    return;
  }

  users[user] = { email: email, password: pass, saldo: 100 };
  localStorage.setItem("users", JSON.stringify(users));
  document.getElementById("msg").textContent = "Registrazione completata! Vai al login.";
}
