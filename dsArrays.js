// ==============Build Array from scratch===========================
/*
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  deleteAtIndex(index) {
    const deletedItem = this.data[index];
    // delete this.data[index]; // Redundant
    console.log('deletedItem', deletedItem);
    this.shiftItems(index);
    return deletedItem;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1]
    this.length--;
  }
}

const myArray = new MyArray();
myArray.push('hi');
myArray.push('my name');
myArray.push('bari');
myArray.push('ok');

// myArray.get(0);
// myArray.pop();
myArray.push('thank you');
console.log(myArray);
myArray.deleteAtIndex(3);
console.log(myArray);
console.log('get: ', myArray.get(3));
*/

//=====================String and Array================================
// Reverse a String
/*
const reverseStr = (str) => {
  // always check input
  if (!str || str.length < 2 || typeof (str) !== 'string') {
    // return console.log('input is not String');
    return 'input is not String';
  }
  const reverseArr = [];

  const strArray = str.split('');

  for (let char of strArray) {
    reverseArr.unshift(char);
  }

  const revStr = reverseArr.join("");

  return revStr;
};

console.log('reverseStr', reverseStr('My name is Bari'));
console.log('number: wrong input', reverseStr(123));

// 2nd solution
const reverseStr2 = (str) => str.split('').reverse().join('');
console.log('reverseStr2', reverseStr2('My name is Bari'));

// 3rd solution
const reverseStr3 = (str) => [...str].reverse().join('');
console.log('reverseStr3', reverseStr3('My name is Bari'));

*/

// ============Merge Sorted Array===================
/*
// Solution01
const mergeSortedArr = (arr1, arr2) => arr1.concat(arr2);

console.log('solution01: ', mergeSortedArr([1, 'hi', 2], ['bari', 3, 4]));

// Solution02
const mergeSortedArr2 = (arr1, arr2) => {
  // check input
  if (typeof arr1 !== 'array' && typeof arr2 !== 'array') {
    return 'input is not an array'
  };
  for (let item of arr2) {
    arr1.push(item);
  }
  return arr1;
};

console.log('solution02: ', mergeSortedArr2([0,3,4,31], [4,6,30]));

// Above solutions are not correct. Two sorted array needs merge into one array from low to high
// SolutionAndrei
const mergeSortedArr3 = (arr1, arr2) => {
  // Check Input
  if (typeof arr1 !== 'object' && typeof arr2 !== 'object') {
    return 'input is not an array'
  };

  if (arr2.length === 0) {
    return arr1;
  };

  if (arr1.length === 0) {
    return arr2;
  }

  const mergeArr = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  while (arr1Item || arr2Item) {
    console.log(arr1Item, arr2Item);
    if (arr2Item === undefined || arr1Item < arr2Item) {
      mergeArr.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergeArr.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  return mergeArr;
};

console.log('solutionAndrei: ', mergeSortedArr3([0,3,4,31,40,50,60,70], [1,2,3,4,6,30]));


*/