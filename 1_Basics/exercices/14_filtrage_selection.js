// Filtrage et sélection
// - Créé un nouveau tableau `potions_en_stock` contenant **uniquement les potions avec stock > 0**
// - Créé un tableau `potions_abordables` avec les potions qui coûtent **moins de 40 🪙**
// - Affiche le nombre de potions dans chaque nouveau tableau
// - Affiche les tableaux créés dans la console

// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion d'endurance", prix: 40, stock: 0 },
  { nom: "Potion de force", prix: 60, stock: 3 },
  { nom: "Potion de vitesse", prix: 35, stock: 8 }
];

// Créer un tableau pour les potions en stock
const potions_en_stock = [];

// Créer un tableau pour les potions abordables (prix < 40)
const potions_abordables = [];

// Parcourir chaque potion de l'inventaire
for (const potion of inventaire) {

  // Vérifier si la potion a du stock
  if (potion.stock > 0) {
    // Ajouter cette potion au tableau potions_en_stock
    potions_en_stock.push(potion);
  }

  // Vérifier si la potion coûte moins de 40
  if (potion.prix < 40) {
    // Ajouter cette potion au tableau potions_abordables
    potions_abordables.push(potion);
  }
}

// Afficher le nombre de potions dans chaque tableau
console.log("Nombre de potions en stock:", potions_en_stock.length);
console.log("Nombre de potions abordables:", potions_abordables.length);

// Afficher les tableaux eux-mêmes
console.log("Potions en stock:", potions_en_stock);
console.log("Potions abordables:", potions_abordables);
