const array = [22, 16, 7, 36, 10, 8, 3];

function seletionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }

    if (i !== minIndex) {
      const tmp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = tmp;
    }
  }
}

seletionSort(array);
console.log(array);
