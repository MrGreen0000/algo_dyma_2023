const array = [7, 5522, 15, 9, 500, 5];

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
}

function countedSort(array, position) {
  const base = 10;
  const count = new Array(base);
  const sortedArray = new Array(array.length);
  for (let i = 0; i < base; i++) {
    count[i] = 0;
  }
  for (let i = 0; i < array.length; i++) {
    count[Math.floor(array[i] / position) % base]++;
  }
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }
  for (let i = array.length - 1; i >= 0; i--) {
    const value = array[i];
    const positionInCount = count[Math.floor(value / position) % base];
    sortedArray[positionInCount - 1] = value;
    count[Math.floor(value / position) % base]--;
  }
  return sortedArray;
}

function radixSort(array) {
  const max = getMax(array);
  if (array.length < 2) {
    return array;
  }
  for (let i = 1; max / i >= 1; i *= 10) {
    array = countedSort(array, i);
  }
  return array;
}

const sortedArray = radixSort(array);

console.log(sortedArray);
