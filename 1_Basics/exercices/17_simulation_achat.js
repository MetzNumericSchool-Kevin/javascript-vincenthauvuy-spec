// Mini-simulation d'achat

// - Affiche l'inventaire disponible à l'aventurier
// - Demande avec `prompt` quelle potion il veut acheter (utilise un numéro de choix qui servira d'identifiant)
// - Demande avec `prompt` combien il en veut
// - Vérifie si :
//   - La potion existe dans l'inventaire
//   - Il y a assez de stock
//   - L'aventurier a assez d'argent (bourse = 100 🪙)
// - Si tout est OK :
//   - Calcule le prix total
//   - Déduis le montant de la bourse
//   - Déduis le stock
//   - Affiche un message de succès avec la bourse restante
// - Sinon, affiche un message d'erreur approprié

// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 40, stock: 5 },
  { nom: "Potion de mana", prix: 20, stock: 3 },
  { nom: "Potion d'endurance", prix: 30, stock: 2 }
];

// Bourse de l'aventurier
let bourse_aventurier = 100;

// Affichage de l'inventaire
console.log("Inventaire disponible :");
for (let i = 0; i < inventaire.length; i++) {
  console.log(`${i + 1}. ${inventaire[i].nom} - Prix : ${inventaire[i].prix} 🪙 - Stock : ${inventaire[i].stock}`);
}

// Demande à l'aventurier quelle potion il veut acheter
let choix = parseInt(prompt("Quelle potion voulez-vous acheter ? (Entrez le numéro)")) - 1;

// Demande combien il en veut
let quantite = parseInt(prompt("Combien en voulez-vous ?"));

// Vérification de la validité du choix
if (choix < 0 || choix >= inventaire.length) {
  console.log("Erreur : Potion inexistante.");
} else if (quantite > inventaire[choix].stock) {
  console.log("Erreur : Stock insuffisant.");
} else {
  let prix_total = inventaire[choix].prix * quantite;
  if (prix_total > bourse_aventurier) {
    console.log("Erreur : Fonds insuffisants.");
  } else {
    // Tout est OK, procéder à l'achat
    bourse_aventurier -= prix_total;
    inventaire[choix].stock -= quantite;
    console.log(`Achat réussi ! Vous avez acheté ${quantite} x ${inventaire[choix].nom}.`);
    console.log(`Bourse restante : ${bourse_aventurier} 🪙`);
  }
}
