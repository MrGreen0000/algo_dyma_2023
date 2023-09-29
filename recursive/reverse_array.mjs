function reverseArray(arr, start, end) {
  if (start < end) {
    const tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;
    return reverseArray(arr, start + 1, end - 1);
  }
  return arr;
}

const test = [1, 2, 3];

reverseArray(test, 0, test.length - 1);

console.log(test);
