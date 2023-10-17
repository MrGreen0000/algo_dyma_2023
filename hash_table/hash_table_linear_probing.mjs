class HashTableLinearProbing {
  static primeNumbers = [
    5, 7, 11, 23, 47, 97, 197, 797, 1597, 3203, 6421, 12853, 25717, 51437,
    102877, 205759, 411527, 823117, 1646237, 3292489, 6584083, 13169977,
  ];
  constructor() {
    this.table = new Array(5);
    this.size = 0;
    this.MAX_LOADING_FACTOR = 0.75;
  }

  // division clé % taile de la table
  hashDivision(key) {
    let total = 0;
    if (typeof key === "string") {
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
    } else if (typeof key === "number") {
      total = key;
    }
    return total % this.table.length;
  }

  prob(index) {
    if (index === this.table.length - 1) {
      return 0;
    } else {
      return index + 1;
    }
  }

  getNextPrime(prime) {
    for (let i = 0; i < HashTableLinearProbing.primeNumbers.length; i++) {
      if (HashTableLinearProbing.primeNumbers[i] > prime * 2) {
        return HashTableLinearProbing.primeNumbers[i];
      }
    }
    throw new Error("hash table max capacity reached !");
  }

  rehash() {
    const oldTable = this.table;
    this.table = new Array(this.getNextPrime(this.table.length));
    this.size = 0;
    for (let i = 0; i < oldTable.length; i++) {
      if (oldTable[i]) {
        this.set(oldTable[i].key, oldTable[i].value);
      }
    }
  }

  get(key) {
    const index = this.hashDivision(key);
    if (this.table[index] && this.table[index].key === key) {
      return this.table[index].value;
    } else {
      let position = index;
      let i = 0;
      while (
        (this.table[position] === null ||
          (this.table[position] && this.table[position.key !== key])) &&
        i < this.table.length
      ) {
        position = this.prob(position);
        i++;
      }
      if (!this.table[position]) {
        return null;
      } else {
        return this.table[position].value;
      }
    }
  }

  set(key, value = null) {
    const index = this.hashDivision(key);
    if (this.table[index] === undefined) {
      this.table[index] = { key, value: value ?? key };
      this.size++;
    } else {
      let position = index;
      let i = 0;
      let availableSpot;
      while (
        (this.table[position] === null ||
          (this.table[position] && this.table[position].key !== key)) &&
        i < this.table.length
      ) {
        if (this.table[position] === null && !availableSpot) {
          availableSpot = position;
        }
        position = this.prob(position);
        i++;
      }
      if (i === this.table.length) {
        throw new Error("has table overflow");
      } else if (this.table[position]) {
        this.table[position].value = value;
      } else {
        if (availableSpot) {
          this.table[availableSpot] = { key, value: value ?? key };
        } else {
          this.table[position] = { key, value: value ?? key };
        }
        this.size++;
      }
    }
    if (this.size / this.table.length > this.MAX_LOADING_FACTOR) {
      this.rehash();
    }
  }

  delete(key) {
    const index = this.hashDivision(key);
    if (this.table[index] && this.table[index].key === key) {
      const value = this.table[index].value;
      this.table[index] = null;
      this.size--;
      return value;
    } else {
      let position = index;
      let i = 0;
      while (
        (this.table[position] === null ||
          (this.table[position] && this.table[position].key !== key)) &&
        i < this.table.length
      ) {
        position = this.prob(position);
        i++;
      }
      if (this.table[position] && this.table[position.key] === key) {
        const value = this.table[position].value;
        this.table[position] = null;
        this.size--;
        return value;
      } else {
        return null;
      }
    }
  }

  isEmpty() {
    return this.size === 0;
  }
}

const table = new HashTableLinearProbing();

table.set("a", 1);
console.log(table);
table.set("b", 1);
table.set("c", 1);
table.set("d", 1);
console.log(table);
