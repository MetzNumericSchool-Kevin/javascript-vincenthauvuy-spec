// Affichage conditionnel

// Variables de l'exercice précédent (modifie selon tes valeurs)
// Affiche dans ta `console` => `Bienvenue dans la boutique <nom_boutique> Aventurier ! 🎉` si la boutique est ouverte, sinon affiche `La boutique <nom_boutique> est fermée, revenez plus tard Aventurier ! 😴`
const maBoutique = "La Potion Magique";
const boutiqueOuverte = true;
if (boutiqueOuverte) {
    console.log("Bienvenue dans la boutique " + maBoutique + " Aventurier ! 🎉");
} else {
    console.log("La boutique " + maBoutique + " est fermée, revenez plus tard Aventurier ! 😴");
}