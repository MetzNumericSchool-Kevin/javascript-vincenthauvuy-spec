// Affichons les informations de la potion

// Variable de l'exercice précédent (modifie selon tes valeurs)
// - Affiche le nom de la potion en utilisant la notation pointée `.`
// - Affiche le prix de la potion en utilisant la notation crochet `[]`
const potion_soin = {
  nom: "Potion de soin",
  prix: 50,
  stock: 10,
};
console.log("Nom de la potion :", potion_soin.nom);
console.log("Prix de la potion :", potion_soin["prix"]);