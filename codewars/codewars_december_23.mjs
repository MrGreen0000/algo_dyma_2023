function hoopCount(n) {
  //your code goes here
  if (n >= 10) {
    return "Great, now move on to tricks";
  } else {
    return "Keep at it until you get it";
  }
}

console.log(hoopCount(10));

function ifChuckSaysSo() {
  return !true;
}

function basicOp(operation, value1, value2) {
  // Code
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else if (operation === "/") {
    return value1 / value2;
  } else {
    return "Operation inconnue";
  }
}

function enough(cap, on, wait) {
  // your code here

  let availableSeats = cap - on;

  if (availableSeats >= wait) {
    return 0;
  } else {
    return wait - availableSeats;
  }
}

function century(year) {
  // Finish this :)
  let century = Math.floor(year / 100);

  if (year % 100 !== 0) {
    century++;
  }
  return century;
}

function highAndLow(numbers) {
  // ...
  let nums = numbers.split(" ").map(Number);
  let max = nums[0];
  let min = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i];
    if (nums[i] < min) min = nums[i];
  }

  return `${max} ${min}`;
}

function SeriesSum(n) {
  // Happy Coding ^_^

  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + i * 3);
  }

  return sum.toFixed(2);
}
