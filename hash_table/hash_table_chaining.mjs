import { LinkedListHash } from "../linked_list/liked_list_hash_table.mjs";

class HashTableChaining {
  constructor() {
    this.table = new Array(97);
    this.size = 0;
  }

  //   division clé % taile de la table
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

  get(key) {
    const index = this.hashDivision(key);
    const list = this.table[index];
    if (!list) {
      return null;
    }
    return list.get(key);
  }

  set(key, value = null) {
    const index = this.hashDivision(key);
    const list = this.table[index];
    if (!list) {
      this.table[index] = new LinkedListHash();
      this.table[index].add(key, value);
      this.size++;
    } else {
      if (!list.update(key, value)) {
        list.add(key, value);
        this.size++;
      }
      return value;
    }
  }
  delete(key) {
    const index = this.hashDivision(key);
    const list = this.table[index];
    if (!list) {
      return null;
    }
    const value = list.delete[key];
    if (value) {
      this.size--;
    }
  }

  isEmpty() {
    return this.size === 0;
  }
}

const hash = new HashTableChaining();

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
