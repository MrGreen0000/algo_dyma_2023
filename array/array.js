class StaticArray {
  constructor() {
    this.value = new Array(0);
  }

  addItemToBeginning(item) {
    const newArray = new Array(this.value.length + 1);
    newArray[0] = item;
    for (let i = 0; i < this.value.length; i++) {
      newArray[i + 1] = this.value[i];
    }
    this.value = newArray;
  }

  addItemEnd(item) {
    const newArray = new Array(this.value.length + 1);
    let i = 0;
    while (i < this.value.length) {
      newArray[i] = this.value[i];
      i++;
    }
    newArray[i] = item;
    this.value = newArray;
  }

  addItemPosition(item, position) {
    if (position < 0 || position > this.value.length) {
      throw new Error("wrong input");
    } else {
      const newArray = new Array(this.value.length + 1);
      let i = 0;
      let j = 0;
      while (i < this.value.length) {
        if (i === position) {
          newArray[j] = item;
          j++;
        }
        newArray[j] = this.value[i];
        i++;
        j++;
      }
      this.value = newArray;
    }
  }

  addItemPosition2(item, position) {
    if (position < 0 || position > this.value.length) {
      throw new Error("wrong input");
    } else {
      const newArray = new Array(this.value.length + 1);
      for (let i = 0; i < this.value.length + 1; i++) {
        if (i === position) {
          newArray[i] = item;
        } else if (i < position) {
          newArray[i] = this.value[i];
        } else {
          newArray[i] = this.value[i - 1];
        }
      }
      this.value = newArray;
    }
  }

  removeAtBeginning() {
    if (this.value.length === 0) {
      return;
    } else {
      const newArray = new Array(this.value.length - 1);
      for (let i = 1; i < this.value.length; i++) {
        newArray[i - 1] = this.value[i];
      }
      this.value = newArray;
    }
  }

  removeAtEnd() {
    if (this.value.length === 0) {
      return;
    } else {
      const newArray = new Array(this.value.length - 1);
      for (let i = 0; i < this.value.length - 1; i++) {
        newArray[i] = this.value[i];
      }
      this.value = newArray;
    }
  }

  removeAtPosition(position) {
    if (position < 0 || position > this.value.length) {
      throw new Error("wrong input");
    } else {
      const newArray = new Array(this.value.length - 1);
      for (let i = 0; i < this.value.length; i++) {
        if (i < position) {
          newArray[i] = this.value[i];
        } else if (i > position) {
          newArray[i - 1] = this.value[i];
        }
      }
      this.value = newArray;
    }
  }
}

const myArray = new StaticArray();
myArray.addItemToBeginning("a");
myArray.addItemToBeginning("b");

console.log(myArray.value);

myArray.addItemEnd("c");
console.log(myArray.value);

// myArray.addItemPosition("d", 0);
// console.log(myArray.value);
// myArray.addItemPosition("e", 2);
// console.log(myArray.value);

myArray.addItemPosition2("d", 0);
console.log(myArray.value);
myArray.addItemPosition2("e", 2);
console.log(myArray.value);

myArray.removeAtBeginning();
console.log(myArray.value);

myArray.removeAtEnd();
console.log(myArray.value);

myArray.removeAtPosition(0);
console.log(myArray.value);
