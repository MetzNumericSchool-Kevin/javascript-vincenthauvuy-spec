// Affichage des potions

// Variable de l'exercice précédent (modifie selon tes valeurs)
// - Affiche le nom de la première potion.
// - Affiche le nom de la dernière potion **sans utiliser l'indice directement, mais en utilisant la taille du tableau** (en utilisant la propriété length de l'objet Array).
// - Affiche le nom de chaque potions avec une boucle `for` et affiche le message `Nous avons de la <nom_potion> !`
const potions = ["Potion de soin", "Potion de force", "Potion d'invisibilité"];
console.log("Première potion : " + potions[0]);
console.log("Dernière potion : " + potions[potions.length - 1]);
for (let i = 0; i < potions.length; i++) {
    console.log("Nous avons de la " + potions[i] + " !");
}