// function nombreSuivant(number) {
//   let nombreDepart = number;
//   let nombresSuivants = [];

//   for (let i = 0; i <= 10; i++) {
//     nombresSuivants.push(nombreDepart + i);
//   }
//   return nombresSuivants;
// }

// console.log(nombreSuivant(2));

// function saisirNombre(number) {
//   if (number >= 1 || number <= 3) {
//     return "Réponse valide";
//   } else {
//     return "Réponse invalide";
//   }
// }

// console.log(saisirNombre(2));

// function nombreSuivant2(number) {
//   let nombreDepart = number;
//   let nombresSuivants = [];
//   let i = 0;

//   while (i <= 10) {
//     nombresSuivants.push(nombreDepart + i + 1);
//     i++;
//   }

//   return nombresSuivants;
// }

// console.log(nombreSuivant2(45));

// function tableMultiplication(number) {
//   let nombreDepart = number;
//   let table = [];

//   for (let i = 1; i <= 10; i++) {
//     table.push(nombreDepart * i);
//   }
//   return `${number} :${table}`;
// }

// console.log(tableMultiplication(5));

// function calculateChange(purchasedPrices, amountPaid, changeCallback) {
//   let totalCost = 0;
//   for (let i = 0; i < purchasedPrices.length; i++) {
//     totalCost += purchasedPrices[i];
//   }

//   let changeAmount = amountPaid - totalCost;

//   const denominations = [10, 5, 1];
//   for (let i = 0; i < denominations.length; i++) {
//     const denomination = denominations[i];
//     while (changeAmount >= denomination) {
//       changeCallback(denomination);
//       changeAmount -= denomination;
//     }
//   }
//   console.log("Total change given: " + (amountPaid - totalCost) + " Euros");
// }

// const displayBillChange = (change) => {
//   console.log(change + " Euros");
// };

// const purchasedPrices = [20, 15, 7];
// const amountPaid = 50;

// calculateChange(purchasedPrices, amountPaid, displayBillChange);

function calculerMonnaie(prixAchetés, montantPayé, fonctionDeRenduMonnaie) {
  let coûtTotal = 0;
  for (let i = 0; i < prixAchetés.length; i++) {
    coûtTotal += prixAchetés[i];
  }

  let montantRendu = montantPayé - coûtTotal;

  const coupures = [10, 5, 1];
  for (let i = 0; i < coupures.length; i++) {
    const coupure = coupures[i];
    while (montantRendu >= coupure) {
      fonctionDeRenduMonnaie(coupure);
      montantRendu -= coupure;
    }
  }
  console.log("Montant total rendu : " + (montantPayé - coûtTotal) + " Euros");
}

const afficherMonnaieBillet = (monnaie) => {
  console.log(monnaie + " Euros");
};

const prixAchetés = [20, 15, 7];
const montantPayé = 50;

calculerMonnaie(prixAchetés, montantPayé, afficherMonnaieBillet);

function calculChancesTierce(n, p) {
  function factorielle(num) {
    if (num === 0) {
      return 1;
    } else {
      return num * factorielle(num - 1);
    }
  }

  const x = factorielle(n) / factorielle(n - p);

  const y = factorielle(n) / (factorielle(p) * factorielle(n - p));

  return { x, y };
}

console.log(calculChancesTierce(10, 4));
