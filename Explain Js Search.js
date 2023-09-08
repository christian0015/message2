{/* <script>
    // Récupérez la barre de recherche et la liste des utilisateurs
    var inputRecherche = document.getElementById("inputSearchMessages");
    var listeUtilisateurs = document.querySelectorAll(".discussion");

    // Créez une copie de la liste des utilisateurs pour réinitialiser l'affichage
    var listeUtilisateursOriginale = Array.from(listeUtilisateurs);

    // Créez un tableau de données pour Fuse.js à partir des noms d'utilisateurs
    var donneesUtilisateurs = [];
    listeUtilisateurs.forEach(function (utilisateur) {
        var nomUtilisateur = utilisateur.querySelector("#userName").innerText;
        donneesUtilisateurs.push({
            nom: nomUtilisateur,
            element: utilisateur
        });
    });

    // Configurez Fuse.js pour la recherche flexible
    var options = {
        keys: ['nom'], // Les clés sur lesquelles vous souhaitez effectuer la recherche
        threshold: 0.3, // Ajustez ce seuil selon vos besoins pour la recherche approximative
        distance: 100 // Ajustez la distance pour la correspondance de caractères
    };
    var fuse = new Fuse(donneesUtilisateurs, options);

    // Ajoutez un événement de saisie à la barre de recherche
    inputRecherche.addEventListener("input", function () {
        var termeRecherche = inputRecherche.value.toLowerCase();

        // Utilisez Fuse.js pour effectuer la recherche flexible
        var resultats = fuse.search(termeRecherche);

        // Affichez ou masquez les utilisateurs en fonction des résultats
        listeUtilisateurs.forEach(function (utilisateur) {
            var estDansLesResultats = resultats.some(function (resultat) {
                return resultat.item.element === utilisateur;
            });

            utilisateur.style.display = estDansLesResultats ? "block" : "none";
        });

        // Réinitialisez l'affichage si la barre de recherche est vide
        if (termeRecherche === "") {
            listeUtilisateursOriginale.forEach(function (utilisateur) {
                utilisateur.style.display = "block"; // Affiche tous les utilisateurs
            });
        }
    });
</script>

<script>
// Récupérez la barre de recherche et la liste des utilisateurs
var inputRecherche = document.getElementById("inputSearchMessages");
var listeUtilisateurs = document.querySelectorAll("#discussion");

// Créez un tableau de données pour Fuse.js à partir des noms d'utilisateurs
var donneesUtilisateurs = [];
listeUtilisateurs.forEach(function (utilisateur) {
    var nomUtilisateur = utilisateur.querySelector("#userName").innerText;
    donneesUtilisateurs.push({
        nom: nomUtilisateur,
        element: utilisateur
    });
});

// Configurez Fuse.js pour la recherche flexible
var options = {
    keys: ['nom'], // Les clés sur lesquelles vous souhaitez effectuer la recherche
    threshold: 0.3, // Ajustez ce seuil selon vos besoins pour la recherche approximative
    distance: 100 // Ajustez la distance pour la correspondance de caractères
};
var fuse = new Fuse(donneesUtilisateurs, options);

// Ajoutez un événement de saisie à la barre de recherche
inputRecherche.addEventListener("input", function () {
    var termeRecherche = inputRecherche.value.toLowerCase();

    // Utilisez Fuse.js pour effectuer la recherche flexible
    var resultats = fuse.search(termeRecherche);

    // Affichez ou masquez les utilisateurs en fonction des résultats
    listeUtilisateurs.forEach(function (utilisateur) {
        var estDansLesResultats = resultats.some(function (resultat) {
            return resultat.item.element === utilisateur;
        });

        utilisateur.style.display = estDansLesResultats ? "block" : "none";
    });

    // Réinitialisez l'affichage si la barre de recherche est vide
    if (termeRecherche === "") {
        listeUtilisateursOriginale.forEach(function (utilisateur) {
            utilisateur.style.display = "block"; // Affiche tous les utilisateurs
        });
    }

});


</script> */}