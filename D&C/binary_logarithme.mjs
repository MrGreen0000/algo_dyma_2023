function binaryLogarithm(n) {
  let count = 0;
  while (n > 1) {
    n = Math.floor(n / 2);
    count++;
  }
  return count;
}

const result = binaryLogarithm(16); // Exemple : calcul du logarithme binaire de 16
console.log("Logarithme binaire :", result); // Le résultat est 4, car 16 / 2^4 = 1
