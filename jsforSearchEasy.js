// Récupérez la barre de recherche et la liste des utilisateurs
var inputRecherche = document.getElementById("inputSearchMessages");
var listeUtilisateurs = document.querySelectorAll(".user");

// Ajoutez un événement de saisie à la barre de recherche
inputRecherche.addEventListener("input", function() {
    var termeRecherche = inputRecherche.value.toLowerCase(); // Convertit en minuscules pour une correspondance insensible à la casse
    
    // Parcourez la liste des utilisateurs pour afficher/masquer en fonction de la correspondance
    listeUtilisateurs.forEach(function(utilisateur) {
        var nomUtilisateur = utilisateur.querySelector("#userName").innerText.toLowerCase();
        if (nomUtilisateur.includes(termeRecherche)) {
            utilisateur.style.display = "block"; // Affiche l'utilisateur
        } else {
            utilisateur.style.display = "none"; // Masque l'utilisateur
        }
    });
});
