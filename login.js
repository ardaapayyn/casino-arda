function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
  const users = JSON.parse(localStorage.getItem("users") || "{}");

  if (!users[user]) {
    document.getElementById("msg").textContent = "Utente non trovato.";
    return;
  }
  if (users[user].password !== pass) {
    document.getElementById("msg").textContent = "Password errata.";
    return;
  }
  localStorage.setItem("loggedUser", user);
  location.href = "casino.html";
}
