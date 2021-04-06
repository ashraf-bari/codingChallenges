class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stacks {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        // Check no node in the stack
        if (!this.bottom) {
            this.bottom = newNode;
            this.top = this.bottom;
            this.length++;
            console.log('list: ', this.printList());
            return this;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        console.log('list: ', this.printList());
        return this;
    }

    pop() {
        if (!this.top) {
            console.log('The Stack is Empty');
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        // if (this.top === this.bottom) {
        //   // this.top = null;
        //   this.bottom = null;
        //   // this.length--;
        //   // console.log('list: ', this.printList());
        // return this; // this return was the culprit 
        // }

        const nodeToRemove = this.top;
        this.top = nodeToRemove.next;
        this.length--;
        console.log('list: ', this.printList());
        return this;
    }

    lookup() {

    }

    isEmpty() {
        if (this.length > 0) {
            return "The Stack is not Empty";
        } else {
            return "The Stack is Empty";
        }
    }

    printList() {
        const list = [];
        let currentNode = this.top;
        // let counter = 0;
        while (currentNode) { // counter < this.length
            list.push(currentNode.value);
            currentNode = currentNode.next;
            // counter++;
        }
        return list;
    }
}

const myStack = new Stacks();

myStack.push(10);
myStack.push(50);
myStack.push(30);
myStack.push(80);
// myStack.pop();
// myStack.pop();
// myStack.pop();
myStack.pop();



  // myStack.printList();
  // myStack.isEmpty();
  // myStack.peek();

