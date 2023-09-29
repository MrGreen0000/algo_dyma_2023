const tableau = new Array(10).fill().map((x, i) => i + 1);
const numberToGuess = Math.floor(Math.random() * 10);

console.log("numberToGuess :", numberToGuess);

function binarySearch(tableau, numberToGuess, debut, fin) {
  if (debut > fin) {
    return null;
  } else {
    const mid = Math.floor((debut + fin) / 2);
    if (tableau[mid] === numberToGuess) {
      return mid;
    } else if (tableau[mid] > numberToGuess) {
      return binarySearch(tableau, numberToGuess, debut, mid - 1);
    } else {
      return binarySearch(tableau, numberToGuess, mid + 1, fin);
    }
  }
}

const result = binarySearch(tableau, numberToGuess, 0, tableau.length - 1);

console.log("result :", result);
