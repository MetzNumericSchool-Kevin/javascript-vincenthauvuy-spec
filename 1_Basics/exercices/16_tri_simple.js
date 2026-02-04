// Tri simple

// - Trie les potions par **prix croissant** (du moins cher au plus cher)
// - Affiche l'inventaire trié dans la console
// - Affiche un message pour chaque potion : `"<nom> : <prix> 🪙"`

// 💡 **Astuce** : Utilise deux boucles `for` imbriquées pour comparer et échanger les éléments (algorithme de tri à bulles simplifié). Pour échanger deux éléments d'un tableau :

// ```js
// let temp = inventaire[i];
// inventaire[i] = inventaire[j];
// inventaire[j] = temp;

// Inventaire de la boutique (non trié)
const inventaire = [
  { nom: "Potion de force", prix: 60, stock: 3 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion d'endurance", prix: 40, stock: 7 }
];

// ---------------------------
// Tri à bulles (bubble sort)
// ---------------------------

// On parcourt chaque élément du tableau inventaire
for (let i = 0; i < inventaire.length; i++) {

  // Pour chaque élément i, on compare avec tous les éléments suivants j
  for (let j = i + 1; j < inventaire.length; j++) {

    // Si le prix de la potion i est plus grand que celui de la potion j
    if (inventaire[i].prix > inventaire[j].prix) {

      // On échange les deux potions pour mettre la moins chère en premier
      let temp = inventaire[i];       // On stocke temporairement la potion i
      inventaire[i] = inventaire[j];  // On met la potion j à la place de i
      inventaire[j] = temp;           // On remet la potion i à la place de j
    }
  }
}

// Affichage du tableau trié par prix croissant
for (let k = 0; k < inventaire.length; k++) {
  console.log(`${inventaire[k].nom} : ${inventaire[k].prix} 🪙`);
}

// ---------------------------
// Tri avec la méthode sort()
// ---------------------------

// Tri du tableau par prix croissant
inventaire.sort((a, b) => {
  // a.prix - b.prix
  // Si résultat < 0 → a avant b
  // Si résultat > 0 → b avant a
  // Si résultat = 0 → ordre inchangé
  return a.prix - b.prix;
});

// Affichage du tableau trié
for (const potion of inventaire) {
  console.log(`${potion.nom} : ${potion.prix} 🪙`);
}
