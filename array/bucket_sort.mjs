// const array = [3, 6, 5, 2, 10, 1];
const array = [29, 25, 3, 49, 9, 37, 21, 43];

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const value = array[i];
    let j;
    for (j = i - 1; j >= 0 && array[j] > value; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = value;
  }
}

function bucketSort(array, min, max) {
  const n = array.length;
  const buckets = new Array(n);

  const range = (max - min) / n;
  console.log(range);

  const sortedArray = new Array(n);
  for (let i = 0; i < n; i++) {
    buckets[i] = [];
  }

  for (let i = 0; i < n; i++) {
    const value = array[i];
    let k = 0;
    while (min + range * (k + 1) < value) {
      k++;
    }
    buckets[k].push(value);
  }
  console.log(buckets);

  for (let i = 0; i < n; i++) {
    insertionSort(buckets[i]);
  }
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      sortedArray[count] = buckets[i][j];
      count++;
    }
  }
  return sortedArray;
}

const sortedArray = bucketSort(array, 3, 49);

console.log(sortedArray);
