// Calcul du prix total d'une commande de potion 🪙

// Variables des exercices précédents (modifie selon tes valeurs)
// Demande avec `prompt` une quantité de potion de soin, et affiche ensuite dans la `console` => `Prix de <quantite_potion> potions de soins : <prix_total> 🪙 mon cher Aventurier. 💸`.
let prix_potion_soin = 50;

const quantite_potion = parseInt(prompt("Combien de potions de soin souhaites-tu acheter ?"));
    if (isNaN(quantite_potion) || quantite_potion < 0) {
        console.log("Veuillez entrer un nombre valide de potions.");
    } else {
        const prix_total = quantite_potion * prix_potion_soin;
        console.log("Prix de " + quantite_potion + " potions de soins : " + prix_total + " 🪙 mon cher Aventurier. 💸");
    }