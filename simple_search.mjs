const tableau = new Array(100).fill().map((x, i) => i + 1);

const numberToGuess = Math.floor(Math.random() * 100);

console.log("numberToGuess :", numberToGuess);

function simpleSearch(tableau, numberToGuess) {
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] === numberToGuess) {
            return i;
        }
    }
}

const result = simpleSearch(tableau, numberToGuess);

console.log("result :", result);
console.log("result :", tableau[result]);
