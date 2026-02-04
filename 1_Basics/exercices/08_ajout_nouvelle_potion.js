// Ajout d'une nouvelle potion

// Variable de l'exercice précédent (modifie selon tes valeurs)
// - Ajoute une nouvelle potion dans le tableau en utilisant la méthode `push` de l'objet Array.
// - Affiche la liste des potions mis à jour
// - Finalement, nous ne gardons pas cette nouvelle potion dans la liste. Supprime la en utilisant la méthode `pop`
// - Affiche la liste des potions mis à jour
const potions = ["Potion de soin", "Potion de force", "Potion d'invisibilité"];
potions.push("Potion de vitesse");
console.log("Liste des potions mise à jour : ", potions);
potions.pop();
console.log("Liste des potions mise à jour après suppression : ", potions);