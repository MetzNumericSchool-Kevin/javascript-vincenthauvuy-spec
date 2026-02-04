// Aventurier, regarde tout ce que je vends !

// Variable de l'exercice précédent (modifie selon tes valeurs)
// Créer un inventaire avec 3 objets `potions` :

// - Potion de soin
// - Potion de mana
// - Potion d'endurance

// Ensuite :

// - Affiche ton inventaire à l'aventurier avec une boucle `for`
// - Pour chaque itération, affiche :
//   - `Nom: <nom_potion>`
//   - `Prix: <prix_potion>`
//   - `Stock: <stock_potion>`

const inventaire = [
{
  nom: "Potion de soin",
  prix: 50,
  stock: 10,
},
{
  nom: "Potion de force",
  prix: 30,
  stock: 5,
},
{
  nom: "Potion d'invisibilité",
  prix: 40,
  stock: 8,
}
];

for (let i = 0; i < inventaire.length; i++) {
  console.log("Nom:", inventaire[i].nom);
  console.log("Prix:", inventaire[i].prix);
  console.log("Stock:", inventaire[i].stock);
}

// - Trouve une autre solution pour afficher **dynamiquement** chacune des propriétés de la potion **sans utiliser la notation pointée ou crochet**. Tu as plusieurs possibilités :
//   - `for` sur `Object.keys`
//   - `for ... in` sur ton objet
//   - `for ... of` sur `Object.entries`

for (const potion of inventaire) {
  for (const [cle, valeur] of Object.entries(potion)) {
    console.log(cle + ":", valeur);
  }
}
