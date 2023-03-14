const tableau = new Array(100000000).fill().map((x, i) => i + 1);

const numberToGuess = 100000000;

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

const start = performance.now();
const result = simpleSearch(tableau, numberToGuess);
const end = performance.now();
console.log("simpleSearch time : ", end - start);
console.log("result :", result);
console.log("numberOffries :", numberOffries);
console.log("result :", tableau[result]);
