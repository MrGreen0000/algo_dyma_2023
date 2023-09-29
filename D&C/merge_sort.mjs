const array = [22, 16, 7, 36, 10, 8, 3];

function mergeArrays(array, left, mid, right) {
  const leftArrayLength = mid - left + 1;
  const rightArrayLength = right - mid;
  const leftArray = [];
  const rigthArray = [];
  for (let i = 0; i < leftArrayLength; i++) {
    leftArray[i] = array[left + i];
  }
  for (let i = 0; i < rightArrayLength; i++) {
    rigthArray[i] = array[mid + i + 1];
  }

  let leftIndex = 0;
  let rightIndex = 0;
  let indexToFill = left;

  while (leftIndex < leftArrayLength && rightIndex < rightArrayLength) {
    if (leftArray[leftIndex] < rigthArray[rightIndex]) {
      array[indexToFill] = leftArray[leftIndex];
      leftIndex++;
    } else {
      array[indexToFill] = rigthArray[rightIndex];
      rightIndex++;
    }
    indexToFill++;
  }

  while (leftIndex < leftArrayLength) {
    array[indexToFill] = leftArray[leftIndex];
    leftIndex++;
    indexToFill++;
  }

  while (rightIndex < rightArrayLength) {
    array[indexToFill] = rigthArray[rightIndex];
    rightIndex++;
    indexToFill++;
  }
}

function mergeSort(array, left = 0, right = array.length - 1) {
  if (left >= right) {
    return null;
  } else {
    const mid = Math.floor((left + right) / 2);
    mergeSort(array, left, mid);
    mergeSort(array, mid + 1, right);
    return mergeArrays(array, left, mid, right);
  }
}

mergeSort(array);
console.log(array);
