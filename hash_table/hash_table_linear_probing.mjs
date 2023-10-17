class HashTableLinearProbing {
  constructor() {
    this.table = new Array(97);
    this.size = 0;
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

const hash = new HashTableLinearProbing();

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
