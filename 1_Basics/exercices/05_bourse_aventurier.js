// Bourse de l'Aventurier 💰

// Variables des exercices précédents (modifie selon tes valeurs)
// - Créé une variable pour stocker l'argent de l'aventurier, initialise-la avec une valeur de ton choix.
// - Vérifie si l'aventurier a assez d'argent pour acheter la quantité de potion demandée.
// - Soustrais la quantité de potion demandée du stock et soustrais le prix total de la bourse de l'aventurier.
//   - ⚠️ **Attention**, il faut que l'aventurier ai assez d'argent pour pouvoir acheter les potions !
//   - ⚠️ **Attention**, il faut qu'il y ait assez de potion en stock pour pouvoir acheter les potions !
let stock_potion_soin = 10;
let prix_potion_soin = 50;
let argent_aventurier = 300;

const quantite_potion = parseInt(prompt("Combien de potions de soin souhaites-tu acheter ?"));
const prix_total = quantite_potion * prix_potion_soin;

if (isNaN(quantite_potion) || quantite_potion < 0) {
    console.log("Veuillez entrer un nombre valide de potions.");
} else if (quantite_potion > stock_potion_soin) {
    console.log("Désolé Aventurier, il n'y a pas assez de potions en stock pour ta commande. 😞");
} else if (prix_total > argent_aventurier) {
    console.log("Désolé Aventurier, tu n'as pas assez d'argent pour cette commande. 😞");
} else {
    stock_potion_soin -= quantite_potion;
    argent_aventurier -= prix_total;
    console.log("Achat réussi ! Tu as acheté " + quantite_potion + " potions de soin pour " + prix_total + " 🪙. Il te reste " + argent_aventurier + " 🪙 et il reste " + stock_potion_soin + " potions en stock. 🎉");
}