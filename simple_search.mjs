const tableau = new Array(100).fill().map((x, i) => i + 1);

const numberToGuess = Math.floor(Math.random() * 100);

let numberOffries = 0;

console.log("numberToGuess :", numberToGuess);

function simpleSearch(tableau, numberToGuess) {

    for (let i = 0; i < tableau.length; i++) {
        numberOffries++;
        if (tableau[i] === numberToGuess) {
            return i;
        }
    }
}

const result = simpleSearch(tableau, numberToGuess);

console.log("result :", result);
console.log("numberOffries :", numberOffries);
console.log("result :", tableau[result]);

