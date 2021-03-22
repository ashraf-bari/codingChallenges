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