const array = [22, 16, 7, 36, 10, 8, 3];

function mergeArrays(leftArray, rightArray) {
  let mergeArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      mergeArr.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      mergeArr.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }
  while (leftIndex < leftArray.length) {
    mergeArr.push(leftArray[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < rightArray.length) {
    mergeArr.push(rightArray[rightIndex]);
    rightIndex++;
  }
  return mergeArr;
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  const middle = Math.ceil(array.length / 2);
  const leftArray = array.slice(0, middle);
  const rightArray = array.slice(middle);
  return mergeArrays(mergeSort(leftArray), mergeSort(rightArray));
}

const sotredArray = mergeSort(array);
console.log(sotredArray);
