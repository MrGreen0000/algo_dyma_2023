// // function smash(words) {
// //   return words.join(" ");
// // }

// // console.log(smash(["je", "suis", "un", "developpeur"]));

// // function litres(time) {
// //   const water = 0.5 * time;

// //   return Math.floor(water);
// // }

// // console.log(litres(3));

// function invert(array) {
//   // Créer un nouveau tableau pour stocker les nombres inversés
//   const invertedArray = [];

//   // Parcourir le tableau d'origine
//   for (let i = 0; i < array.length; i++) {
//     // Inverser le signe du nombre
//     invertedArray.push(-array[i]);
//   }

//   return invertedArray;
// }

// // function invert(array) {
// //   const invertedArray = [];

// //   for (const element of array) {
// //     invertedArray.push(-element);
// //   }

// //   return invertedArray;
// // }

// console.log(invert([1, 2, 3, 4, 5, 6]));

// const quarterOf = (month) => {
//   if (month >= 1 && month <= 3) {
//     return 1;
//   } else if (month >= 4 && month <= 6) {
//     return 2;
//   } else if (month >= 7 && month <= 9) {
//     return 3;
//   } else {
//     return 4;
//   }
// };

// function fight(bullets, dragons) {
//   const bulltesNeeded = dragons * 2;

//   if (bullets >= bulltesNeeded) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const randomBullets = Math.floor(Math.random() * 20); // Génère un nombre aléatoire entre 0 et 19
// const randomDragons = Math.floor(Math.random() * 10);

// console.log("bullets :", randomBullets);
// console.log("dragons :", randomDragons);

// console.log(fight(randomBullets, randomDragons));

// function DNAStrand(dna) {
//   //your code here

//   const arrayDna = [];

//   for (let i = 0; i < dna.length; i++) {
//     const currentChar = dna[i];

//     if (currentChar === "A") {
//       arrayDna.push("T");
//     } else if (currentChar === "T") {
//       arrayDna.push("A");
//     } else if (currentChar === "C") {
//       arrayDna.push("G");
//     } else if (currentChar === "G") {
//       arrayDna.push("C");
//     }
//   }

//   return arrayDna.join("");
// }

// console.log(DNAStrand("GTAT"));

// function lovefunc(flower1, flower2) {
//   // moment of truth

//   if (
//     (flower1 % 2 === 1 && flower2 % 2 === 0) ||
//     (flower1 % 2 === 0 && flower2 % 2 === 1)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(lovefunc(5, 5));

// function getSum(a, b) {
//   if (a === b) {
//     return a;
//   }

//   if (a > b) {
//     [a, b] = [b, a];
//   }

//   let sum = 0;

//   for (let i = a; i <= b; i++) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(getSum(4, 4));

// function bmi(weight, height) {
//   const caluletBmi = weight / (height * height);

//   if (caluletBmi <= 18.5) {
//     return "Underweight";
//   } else if (caluletBmi <= 20) {
//     return "Normal";
//   } else if (caluletBmi <= 30) {
//     return "Overweight";
//   } else {
//     return "Obese";
//   }
// }

// console.log(bmi(80, 180));

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   const ourDistance = fuelLeft * mpg;

//   if (ourDistance >= distanceToPump) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(zeroFuel(50, 25, 2));

// function doubleInteger(i) {
//   const double = i * 2;
//   return double;
// }

function XO(str) {
  const lowerStr = str.toLowerCase();

  let countX = 0;
  let count0 = 0;

  for (const element of lowerStr) {
    if (element === "x") {
      countX++;
    } else if (element === "o") {
      count0++;
    }
  }

  return countX === count0;
}

console.log("XO :", XO("XOxxxoooo"));

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  } else {
    return n * m;
  }
}

function abbrevName(name) {
  const words = name.split(" ");

  console.log(words[2]);

  if (words.length < 2) {
    return "Format invalide";
  }

  const initials = words.map((word) => word[0].toUpperCase()).join(".");

  return initials;
}

console.log(abbrevName("naji mouflih"));

function simpleMultiplication(number) {
  // your code........

  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}

function squareSum(numbers) {
  let sum = 0;

  for (let square of numbers) {
    const calculet = square * square;

    sum = sum + calculet;
  }

  return sum;
}

console.log(squareSum([1, 2, 2]));

function areYouPlayingBanjo(name) {
  // Implement me

  if (name[0] === "R" || name[0] === "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}

function openOrSenior(data) {
  const result = [];

  for (player of data) {
    const age = player[0];
    const handicap = player[1];

    if (age >= 55 && handicap > 7) {
      result.push("Senior");
    } else {
      result.push("Open");
    }
  }
  return result;
}

var number = function (busStops) {
  // Good Luck!
  let totalPeople = 0;

  for (stop of busStops) {
    const up = stop[0];
    const down = stop[1];

    totalPeople += up - down;
  }

  return totalPeople;
};

function longest(s1, s2) {
  const mergedString = s1 + s2;

  const uniqueChars = new Set(mergedString);

  const sortedChars = [...uniqueChars].sort((a, b) => a - b);

  const result = sortedChars.join("");

  return result;
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
// Sum Numbers
function sum(numbers) {
  "use strict";

  let result = 0;

  if (numbers.length === 0) {
    return 0;
  }

  for (const number of numbers) {
    result += number;
  }

  return result;
}

function countBy(x, n) {
  let z = [];

  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }

  return z;
}

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence

  const arrayRna = [];

  for (let i = 0; i < dna.length; i++) {
    const currentChar = dna[i];

    if (currentChar === "T") {
      arrayRna.push("U");
    } else {
      arrayRna.push(currentChar);
    }
  }
  return arrayRna.join("");
}

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let sum = 0;

  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
  }

  const moyenne = sum / classPoints.length;

  if (yourPoints > moyenne) {
    return true;
  } else {
    return false;
  }
}

function sumTwoSmallestNumbers(numbers) {
  //Code here
  const sortedArr = numbers.sort((a, b) => a - b);

  return sortedArr[0] + sortedArr[1];
}

function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  }

  let countPositives = 0;
  let sumNegatives = 0;

  for (let i = 0; i < input.length; i++) {
    const currentNumber = input[i];

    if (currentNumber > 0) {
      countPositives++;
    } else if (currentNumber < 0) {
      sumNegatives += currentNumber;
    }
  }

  return [countPositives, sumNegatives];
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);

function sumMix(x) {
  let sum = 0;

  for (let i = 0; i < x.length; i++) {
    const value = parseInt(x[i]);

    sum += value;
  }

  return sum;
}

function otherAngle(a, b) {
  const triangleSum = 180;
  const c = triangleSum - (a + b);

  return c;
}

const areaOrPerimeter = function (l, w) {
  // Return your answer

  let result = 0;

  if (l === w) {
    result = l * w;
  } else {
    result = (l + w) * 2;
  }

  return result;
};

const greet = function () {
  return "hello world!";
};

console.log(greet());

function booleanToString(b) {
  //your code here

  if (b === true) {
    return "true";
  } else {
    return "false";
  }
}

function generateGreeting(name) {
  //your code here
  return `Hello, ${name} how are you doing today?`;
}

console.log(generateGreeting("Naji"));

function makeUpperCase(str) {
  // Code here

  return str.toUpperCase();
}

console.log(makeUpperCase("javascript"));

function grow(x) {
  let result = 1;

  for (let i = 0; i < x.length; i++) {
    result *= x[i];
  }
  return result;
}

function solution(string) {
  let result = "";

  // const isAllLowerCase = string === string.toLowerCase();

  // if (isAllLowerCase) {
  //   return string;
  // }

  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];
    const isUpperCase = currentChar === currentChar.toUpperCase();

    if (isUpperCase && i !== 0) {
      result += " ";
    }

    result += currentChar;
  }
  return result;
}

console.log(solution("camelcase"));

function isIsogram(str) {
  //...

  const lowerStr = str.toLowerCase();

  const encounteredLetters = {};

  for (let i = 0; i < str.length; i++) {
    const letter = lowerStr[i];

    if (encounteredLetters[letter]) {
      return false;
    }
    encounteredLetters[letter] = true;
  }
  return true;
}

function isIsogram2(str) {
  return new Set(str.toUpperCase()).size == str.length;
}

function nbYear(p0, percent, aug, p) {
  // your code

  let n = 0;

  let newp0 = p0;

  while (newp0 < p) {
    let population = Math.floor((newp0 += newp0 * (percent / 100) + aug));
    newp0 = population;
    n++;

    if (newp0 >= p) {
      break;
    }
  }

  return n;
}

function getMiddle(s) {
  //Code goes here!
  const isEvenLength = s.length % 2 === 0;
  const middleIndex = Math.floor(s.length / 2);

  if (isEvenLength) {
    return s.substring(middleIndex - 1, middleIndex + 1);
  } else {
    return s.charAt(middleIndex);
  }
}

const stringToNumber = function (str) {
  // put your code here

  const value = parseInt(str);

  return value;
};

const stringToNumber2 = function (str) {
  // put your code here

  return Number(str);
};

console.log(stringToNumber2("23343434242"));

function comp(array1, array2) {
  //your code here

  if (!array1 || !array2) {
    return false;
  }

  if (array1.length !== array2.length) {
    return false;
  }

  const sortedArray1 = array1.sort((a, b) => a - b);
  const sortedArray2 = array2.sort((a, b) => a - b);

  for (let i = 0; i < sortedArray1.length; i++) {
    if (sortedArray1[i] * sortedArray1[i] !== sortedArray2[i]) {
      return false;
    }
  }

  return true;
}

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [
      11 * 11,
      121 * 121,
      144 * 144,
      19 * 19,
      161 * 161,
      19 * 19,
      144 * 144,
      19 * 19,
    ]
  )
);

function towerBuilder(nFloors) {
  // build here

  const tower = [];

  for (let i = 0; i < nFloors; i++) {
    const spaces = " ".repeat(nFloors - i - 1);
    const stars = "*".repeat(2 * i + 1);
    const floor = spaces + stars + spaces;
    tower.push(floor);
  }

  return tower;
}

const tower3Floors = towerBuilder(5);

// Affichage de la tour
for (const floor of tower3Floors) {
  console.log(floor);
}

function noSpace(x) {
  return x.split(" ").join("");
}

console.log(noSpace("lkfpkfekfep ferferf  fefe df fereere"));

function disemvowel(str) {
  return str.replace(/[aéeiou\s.']/gi, "");
}
console.log(
  disemvowel("Je suis un développeur et j'ai en moi une fOrce extraOrdinaire")
);

function nombreSuivant(number) {
  let nombreDepart = number;
  let nombresSuivants = [];

  for (let i = 0; i <= 10; i++) {
    nombresSuivants.push(nombreDepart + i);
  }
  return nombresSuivants;
}

console.log(nombreSuivant(2));

function saisirNombre(number) {
  if (number <= 1 && number >= 3) {
    return "Réponse valide";
  } else {
    return "Réponse invalide";
  }
}

console.log(saisirNombre(4));
