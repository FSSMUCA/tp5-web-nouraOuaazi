
function totalAvecRemise(total, remise) {
    let montantRemise = total * remise / 100;
    let totalFinal = total - montantRemise;
    return totalFinal;
}

let totalHT = Number(prompt("Entrez le total HT (en €) :"));
let remisePourcentage = Number(prompt("Entrez la remise en % :"))
let totalFinal = totalAvecRemise(totalHT, remisePourcentage);

console.log("Total HT : " + totalHT + " €");
console.log("Remise : " + remisePourcentage + "%");
console.log("Montant de la remise : " + (totalHT * remisePourcentage / 100).toFixed(2) + " €");
console.log("Total avec remise : " + totalFinal.toFixed(2) + " €");