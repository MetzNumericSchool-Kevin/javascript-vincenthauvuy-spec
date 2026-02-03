// Affichage conditionnel avec switch

// Variables des exercices précédents (modifie selon tes valeurs)
// - Affiche dans la console `Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔`
//   - `1. Le nom de la boutique`
//   - `2. Le nom du Sorcier`
//   - `3. Le prix d'un potion de soin`
//   - `4. La quantité d'une potion de soin`
// - Fais un `prompt` pour demander à l'aventurier son choix entre 1 et 4
// - Avec un `switch ... case` sur le numéro choisi par l'aventurier, affiche l'information demandée
//   - Dans le cas où cela ne correspond pas à aucun des choix, affiche `Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕`
//   - ⚠️ **Attention**, `prompt` retourne une chaîne de caractère, il faudra certainement le convertir en `Number` avec `parseInt`
const maBoutique = "La Potion Magique";
const nomSorcier = "Archibald";
let stock_potion_soin = 10;
let prix_potion_soin = 50;
console.log("Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔");
console.log("1. " + maBoutique);
console.log("2. " + nomSorcier);
console.log("3. " + prix_potion_soin + " pièces d'or");
console.log("4. " + stock_potion_soin + " potions de soin en stock");
const choixAventurier = parseInt(prompt("Fais ton choix entre 1 et 4 :"));
switch (choixAventurier) {
    case 1:
        console.log("Le nom de la boutique est : " + maBoutique);
        break;
    case 2:
        console.log("Le nom du Sorcier est : " + nomSorcier);
        break;
    case 3:
        console.log("Le prix d'une potion de soin est de : " + prix_potion_soin + " pièces d'or");
        break;
    case 4:
        console.log("La quantité de potions de soin en stock est de : " + stock_potion_soin);
        break;
    default:
        console.log("Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕");
        break;
}