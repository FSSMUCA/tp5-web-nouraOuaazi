
function sommeIterative(n) {
    let somme = 0;
    for (let i = 1; i <= n; i++) {
        somme += i;
    }
    return somme;
}
function sommeRecursive(n) {
    if (n <= 0) {
        return 0;
    }
    else {
        return n + sommeRecursive(n - 1);
    }
}

let nombre = 5;

console.log("Test avec n = " + nombre);
console.log("Version itérative : sommeIterative(" + nombre + ") = " + sommeIterative(nombre));
console.log("Version récursive : sommeRecursive(" + nombre + ") = " + sommeRecursive(nombre));

let n = Number(prompt("Entrez un nombre n pour calculer la somme de 1 à n :"));

let resultatIteratif = sommeIterative(n);
let resultatRecursif = sommeRecursive(n);

console.log("\nRésultats pour n = " + n + " :");
console.log("Somme itérative (boucle) : " + resultatIteratif);
console.log("Somme récursive : " + resultatRecursif);

let formuleMathematique = n * (n + 1) / 2;
console.log("Vérification avec formule n(n+1)/2 : " + formuleMathematique);
console.log("Les résultats sont identiques ? " + (resultatIteratif === resultatRecursif && resultatIteratif === formuleMathematique));