const a = [];
const b = [];
const c = [];

function initHanoi(n) {
  while (n > 0) {
    a.push(n);
    n--;
  }
}

function solveHanoi(n, source, auxiliaire, destination) {
  if (n > 0) {
    solveHanoi(n - 1, source, destination, auxiliaire);
    destination.push(source.pop());
    console.log(a, b, c);
    console.log("===================");
    solveHanoi(n - 1, auxiliaire, source, destination);
  }
}

const n = 3;
initHanoi(n);
console.log(a);
solveHanoi(n, a, b, c);
