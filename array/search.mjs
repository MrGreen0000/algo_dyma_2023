const array = new Array(100).fill().map((x, i) => i + 1);
const numberToGuess = Math.floor(Math.random() * 100 + 1);

let numberOfTries = 0;

console.log("numberToGuess : ", numberToGuess);

function search(array, numberToGuess) {
  for (let i = 0; i < array.length; i++) {
    numberOfTries++;
    if (array[i] === numberToGuess) {
      return i;
    }
  }
}

const result = search(array, numberToGuess);
console.log("result : ", result);
console.log("result : ", array[result]);
console.log("numberOfTries : ", numberOfTries);
