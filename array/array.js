class MyArray {
  constructor() {
    this.data = new Array();
  }

  addItemAtBeginning(item) {
    const arr = new Array(this.data.length + 1);
    arr[0] = item;
    for (let i = 0; i < this.data.length; i++) {}
  }
}

const myarr = new MyArray();
myarr.addItemAtBeginning("a");

console.log(myarr);
