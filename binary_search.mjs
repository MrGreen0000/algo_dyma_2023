const tableau = new Array(100000000).fill().map((x, i) => i + 1);

const numberToGuess = Math.floor(Math.random() * 100000000);

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
const start = performance.now();
const result = binarySearch(tableau, numberToGuess);
const end = performance.now();
console.log("binarySearch time : ", end - start);
console.log("result :", result);
console.log("numberOffries :", numberOffries);
console.log("result :", tableau[result]);
