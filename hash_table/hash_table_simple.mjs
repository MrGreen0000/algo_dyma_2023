class HashTable {
  constructor() {
    this.table = new Array(97);
    this.size = 0;
    this.MUTPLICATION = 0.98574458;
  }

  //division clé % taile de la table
  //   hashDivision(key) {
  //     let total = 0;
  //     if (typeof key === "string") {
  //       for (let i = 0; i < key.length; i++) {
  //         total += key.charCodeAt(i);
  //       }
  //     } else if (typeof key === "number") {
  //       total = key;
  //     }
  //     return total % this.table.length;
  //   }

  // Partie entière ( taille du tableau * ((clé * 0 < A < 1 ) % 1) )
  hashMultiplication(key) {
    let total = 0;
    if (typeof key === "string") {
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
    } else if (typeof key === "number") {
      total = key;
    }
    return Math.floor(this.table.length * ((total * this.MUTPLICATION) % 1));
  }

  get(key) {
    const index = this.hashMultiplication(key);
    return this.table[index];
  }
  set(key, value = null) {
    const index = this.hashMultiplication(key);
    if (this.table[index]) {
      console.log("collision");
    } else {
      this.size++;
    }
    this.table[index] = value ?? key;
    return index;
  }
  delete(key) {
    const index = this.hashMultiplication(key);
    let value = null;
    if (this.table[index]) {
      this.size--;
      value = this.table[index];
      this.table[index] = null;
    }
    return value;
  }

  isEmpty() {
    return this.size === 0;
  }
}

const hash = new HashTable();

const hello = "world";
const user = {
  id: "123",
  name: "Jean",
};

hash.set(hello);
hash.set(user.id, user);

console.log(hash);
console.log(hash.get("world"));
console.log(hash.get("123"));
