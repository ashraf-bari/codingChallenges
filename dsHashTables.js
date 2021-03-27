// =====================Hash Table=========================
/** 
class HashTable {
  constructor(size) {
    this.size = size;
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    console.log(address);
    if(!this.data[address]) {
      this.data[address] = [];
    } 
    this.data[address].push([key, value]);
    // return this.data;
    console.log(this.data);
    return this.data;
  }

  // get(key) {
  //   const address = this._hash(key);
  //   if (!this.data[address]) {
  //     return "No Data is Found";
  //   }
  //   for (let item of this.data[address]) {
  //     if (item[0] === key) {
  //       return item[1];
  //     }
  //   }
  // }  

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if(currentBucket) {
      for (let i=0; i < currentBucket.length; i++) {
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  // solutions with collisions
  keys() {
    const keys = [];
    for (let i=0; i<this.data.length; i++) {
      for (let j=0; j<this.data[i].length; j++) {
        if (this.data[i][j]) {
          keys.push(this.data[i][j][0]);
        }
      }
    }
    return keys;
  }
}

const myHashTable = new HashTable(2);
// console.log('myHashTableBefore: ', myHashTable);
myHashTable.set('grapes', 10000);
// myHashTable.get('grapes');
myHashTable.set('apples', 54);
// myHashTable.get('apples');
myHashTable.set('orange', 20);
myHashTable.set('peach', 30);

console.log('myHashTableAfter: ', myHashTable);
myHashTable.keys();

*/

// ============First Recurring Characters==================

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacterNestedLoop(input) {
  for (let i=0; i<input.length; i++) {
    for (let j=i+1; j<input.length; j++) {
      if (input[i]===input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}// time complexity O(n^2) and space complexity O(1)

const firstRecurringCharacterUsingHashTable = (input) => {
  const keys = {};
  for (let item of input) {
    console.log('keys ', keys);
    if (keys[item]) { // if (keys[item] or if (item === keys[item]) also consider 0 cause in JS 0 considers false value
      return item;
    } else {
      keys[item] = true; // because 0 considered falsy value in JS then set value as true for keys[item]
    }
  }
  
  return undefined;
} // time complexity O(n), However, we have increased the memory space complexity O(n)

// console.log('Using Nested Loops ', firstRecurringCharacterNestedLoop([2,5,1,2,3,5,1,2,4]));
console.log('Using HashTable ', firstRecurringCharacterUsingHashTable([2,5,5,2,3,5,1,2,4]));

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2


