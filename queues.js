class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        // check if the Queue is empty
        if (this.length === 0) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (!this.first) {
            console.log('the Queue is empty');
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        const holdingPointer = this.first.next;
        this.first = holdingPointer;
        this.length--;
        return this;
    }
    isEmpty() {

    }
}

const myQueue = new Queue();
myQueue.enqueue('joy');
myQueue.enqueue('matt');
myQueue.enqueue('pavel');
myQueue.enqueue('samir');
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
