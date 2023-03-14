const tableau = new Array(100).fill().map((x, i) => i + 1);

const numberToGuess = Math.floor(Math.random() * 100);

let numberOffries = 0;

console.log("numberToGuess :", numberToGuess);

function binarySearch(tableau, numberToGuess) {
    let min = 0;
    let max = tableau.length - 1;
    while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        const guess = tableau[mid];
        numberOffries++;
        if (guess === numberToGuess) {
            return mid;
        } else if (guess > numberToGuess) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }
    return null;
}

const result = binarySearch(tableau, numberToGuess);

console.log("result :", result);
console.log("numberOffries :", numberOffries);
console.log("result :", tableau[result]);
