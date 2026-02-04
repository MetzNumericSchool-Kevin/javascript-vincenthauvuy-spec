// Inventaire de la boutique :
// chaque potion est un objet avec un nom, un prix et un stock
const inventaire = [
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion d'endurance", prix: 40, stock: 0 },
  { nom: "Potion de force", prix: 60, stock: 3 },
];

// On suppose au départ que la première potion est :
// - la plus chère
// - celle avec le plus de stock
let potion_la_plus_chere = inventaire[0];
let potion_avec_plus_de_stock = inventaire[0];

// Compteur du nombre de potions ayant du stock
let nb_potions_en_stock = 0;

// On parcourt chaque potion de l'inventaire
for (const potion of inventaire) {

  // Si le prix de la potion actuelle est plus élevé
  // que celui de la potion la plus chère connue
  if (potion.prix > potion_la_plus_chere.prix) {
    // Alors cette potion devient la nouvelle plus chère
    potion_la_plus_chere = potion;
  }

  // Si la potion actuelle a plus de stock
  // que celle avec le plus de stock connu
  if (potion.stock > potion_avec_plus_de_stock.stock) {
    // Elle devient la nouvelle référence
    potion_avec_plus_de_stock = potion;
  }

  // Si la potion a au moins une unité en stock
  if (potion.stock > 0) {
    // On incrémente le compteur
    nb_potions_en_stock++;
  }
}

// Affichage des résultats
console.log(
  "Potion la plus chère:",
  potion_la_plus_chere.nom,
  "à",
  potion_la_plus_chere.prix,
  "pièces d'or"
);

console.log(
  "Potion avec le plus de stock:",
  potion_avec_plus_de_stock.nom,
  "avec",
  potion_avec_plus_de_stock.stock,
  "unités en stock"
);

console.log(
  "Nombre de potions en stock:",
  nb_potions_en_stock
);