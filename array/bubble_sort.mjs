const array = [22, 16, 7, 36, 10, 8, 3];

function bubbleSort(array) {
  let len = array.length;
  let swap;

  do {
    swap = false;
    for (let i = 1; i < len; i++) {
      if (array[i] < array[i - 1]) {
        const tmp = array[i];
        array[i] = array[i - 1];
        array[i - 1] = tmp;
        swap = true;
      }
    }
    len--;
  } while (swap);
}

bubbleSort(array);
console.log(array);
