const array = [22, 16, 7, 36, 10, 8, 3];

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

insertionSort(array);
console.log(array);
