// Affichage conditionnel

// Variables de l'exercice précédent (modifie selon tes valeurs)
// Affiche dans ta `console` => `Bienvenue dans la boutique <nom_boutique> Aventurier ! 🎉` si la boutique est ouverte, sinon affiche `La boutique <nom_boutique> est fermée, revenez plus tard Aventurier ! 😴`
const ma_boutique = "La Potion Magique";
const boutique_ouverte = true;
if (boutique_ouverte) {
    console.log("Bienvenue dans la boutique " + ma_boutique + " Aventurier ! 🎉");
} else {
    console.log("La boutique " + ma_boutique + " est fermée, revenez plus tard Aventurier ! 😴");
}