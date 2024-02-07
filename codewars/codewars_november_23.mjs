function likes(names) {
  // TODO

  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    // Ajout d'une condition pour gérer trois noms
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    const othersCount = names.length - 2;
    return `${names[0]}, ${names[1]} and ${othersCount} others like this`;
  }
}

console.log(likes([])); // "no one likes this"
console.log(likes(["Peter"])); // "Peter likes this"
console.log(likes(["Jacob", "Alex"])); // "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"])); // "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

// function likes(names) {
//     names = names || [];
//     switch(names.length){
//       case 0: return 'no one likes this'; break;
//       case 1: return names[0] + ' likes this'; break;
//       case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
//       case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
//       default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//     }
//   }

function twoSum(numbers, target) {
  let numsMap = {};

  for (let i = 0; i < numbers.length; i++) {
    let complement = target - numbers[i];

    if (numsMap[complement] !== undefined) {
      return [numsMap[complement], i];
    }

    numsMap[numbers[i]] = i;
  }

  return [];
}

console.log(twoSum([1, 2, 3], 4));

function rentalCarCost(d) {
  // Your solution here

  const dailyRate = 40;
  let discount = 0;

  if (d >= 7) {
    discount = 50;
  } else if (d >= 3) {
    discount = 20;
  }

  return dailyRate * d - discount;
}

console.log(rentalCarCost(7));
