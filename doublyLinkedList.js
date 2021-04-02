class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            previous: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        // const newNode = {
        //   value: value,
        //   next: null
        // };

        const newNode = new Node(value);
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;

        this.length++;
        return this;
    }

    prepend(value) {
        // const newNode = {
        //   value: value,
        //   next: null
        // }

        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;

        this.length++;
        return this;
    }

    printList() {
        const arrayList = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            arrayList.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arrayList;
    }

    insert(index, value) {
        // Check params: Insert as tail
        if (index >= this.length) {
            this.append(value);
            return this.printList();
        }

        // Check params: Insert as head
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }

        // Insert any index between head and tail
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        const newNode = new Node(99);
        newNode.next = follower;
        newNode.previous = leader;
        leader.next = newNode;
        follower.previous = newNode;

        // Increase length
        this.length++;
        console.log('insert==> ', this);
        return this.printList();

        /* Done by Me
        const newNode = new Node(99);
        let previousNode = null;
        let currentNode = this.head;
        while(index>0) {
          previousNode = currentNode;
          currentNode = currentNode.next;
          console.log('preNode ', previousNode);
          console.log('curNode ', currentNode);
          index--;
        }
        newNode.next = currentNode;
        previousNode.next = newNode;
    
        return this.printList();
        */

    }

    traverseToIndex(index) {
        let currentNode = this.head;
        let counter = 0;
        while (counter < index) {
            currentNode = currentNode.next;
            counter++;
            // console.log('currentNode ', currentNode);
            // console.log('counter ', counter);
        }
        return currentNode;
    }

    remove(index) {
        // remove head
        if (index === 0) {
            const nodeToRemove = this.head;
            this.head = nodeToRemove.next;
            this.head.previous = null;
            this.length--;
            return this.printList();
        }
        // remove tail or any inside linkedList
        if (index > 0 && index < this.length - 1) {
            const nodeToRemove = this.traverseToIndex(index);
            const leader = nodeToRemove.previous;
            const follower = nodeToRemove.next;
            leader.next = follower;
            follower.previous = leader;

            this.length--;
            console.log('remove==> ', this);
            return this.printList();
        }

        // remove without index will always remove the tail
        const nodeToRemove = this.traverseToIndex(this.length - 1);
        const leader = nodeToRemove.previous;
        leader.next = null;

        this.length--;
        return this.printList();
    }
}
const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);

// myLinkedList.traverseToIndex(2);
myLinkedList.insert(1, 99);

myLinkedList.printList();

myLinkedList.remove(1);
  // console.log(myLinkedList);