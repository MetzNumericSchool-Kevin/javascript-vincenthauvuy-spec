// Calculs et statistiques

// - Calcule la **valeur totale de l'inventaire** (somme de `prix × stock` pour chaque potion)
// - Calcule le **prix moyen** des potions
// - Calcule le **stock total** de toutes les potions
// - Affiche tous ces résultats dans la console

// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion d'endurance", prix: 40, stock: 7 },
  { nom: "Potion de force", prix: 60, stock: 3 }
];

// Initialiser les variables pour les calculs
let valeur_totale_inventaire = 0;
let stock_total = 0;

// Parcourir chaque potion de l'inventaire
for (const potion of inventaire) {
  // Calculer la valeur de cette potion (prix × stock)
  const valeur_potion = potion.prix * potion.stock;

  // Ajouter cette valeur à la valeur totale de l'inventaire
  valeur_totale_inventaire += valeur_potion;

  // Ajouter le stock de cette potion au stock total
  stock_total += potion.stock;
}

// Calculer le prix moyen des potions
const prix_moyen = valeur_totale_inventaire / inventaire.length;

// Afficher les résultats dans la console
console.log("Valeur totale de l'inventaire:", valeur_totale_inventaire, "pièces d'or");
console.log("Prix moyen des potions:", prix_moyen.toFixed(2), "pièces d'or");
console.log("Stock total de toutes les potions:", stock_total, "unités");