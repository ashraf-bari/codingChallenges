class Node {
    constructor(value) {
        this.value = value;
    }
}

class Stack {
    constructor() {
        this.data = [];
    }

    peek() {
        return this.data[this.data.length - 1];
    }

    insert(value) {
        // const newNode = new Node(value); // We do not need to use the node class
        this.data.push(value);
        return this;
    }

    remove() {
        this.data.pop();
        return this;
    }

}

const myStack = new Stack();
myStack.insert('google');
myStack.insert('udemy');
myStack.insert('youtube');
myStack.remove();
  // myStack.remove();
  // myStack.remove();


