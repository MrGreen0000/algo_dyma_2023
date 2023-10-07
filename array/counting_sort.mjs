const array = [7, 5, 0, 9, 2, 5];

function getMax(array) {
  if (array.length < 2) {
    return array;
  }

  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
  console.log(max);
}

function countingSort(array) {
  const max = getMax(array);

  const count = new Array(max + 1);

  const sortedArray = new Array(array.length);
  for (let i = 0; i < count.length; i++) {
    count[i] = 0;
  }
  console.log(count);
  for (let i = 0; i < array.length; i++) {
    count[array[i]]++;
  }
  console.log(count);
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }
  console.log(count);
  for (let i = array.length - 1; i >= 0; i--) {
    const value = array[i];
    const position = count[value];
    sortedArray[position - 1] = value;
    count[value]--;
  }
  return sortedArray;
}

const sortedArray = countingSort(array);
console.log(sortedArray);
