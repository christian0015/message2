
// Récupérez le nom d'utilisateur depuis le localStorage et affichez-le
const loggedInUser = localStorage.getItem("loggedInUser");
if (loggedInUser) {
    document.getElementById("username-placeholder").textContent = loggedInUser;
} else {
    // Si l'utilisateur n'est pas connecté, redirigez-le vers la page de connexion
    window.location.href = "index.html";
}

