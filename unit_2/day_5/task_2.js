class Node {
      constructor(value) {
        this.value = value;
        this.next = null;
      }
    }
    
    class LinkedList {
      constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
    
      // method to add a new node to the end of the list
      append(value) {
        const newNode = new Node(value);
    
        if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
        } else {
          this.tail.next = newNode;
          this.tail = newNode;
        }
    
        this.length++;
      }
    
      // method to get a node at a specific index
      getNodeAtIndex(index) {
        if (index < 0 || index >= this.length) {
          return null;
        }
    
        let currentNode = this.head;
        let count = 0;
    
        while (count < index) {
          currentNode = currentNode.next;
          count++;
        }
    
        return currentNode;
      }
    
      // method to remove a node at a specific index
      removeNodeAtIndex(index) {
        if (index < 0 || index >= this.length) {
          return null;
        }
    
        if (index === 0) {
          this.head = this.head.next;
    
          if (!this.head) {
            this.tail = null;
          }
        } else {
          const prevNode = this.getNodeAtIndex(index - 1);
          const nodeToRemove = prevNode.next;
          prevNode.next = nodeToRemove.next;
    
          if (!prevNode.next) {
            this.tail = prevNode;
          }
        }
    
        this.length--;
      }
    }
    

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
const node = list.getNodeAtIndex(0);
console.log(node.value); 