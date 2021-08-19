// You have a singly-linked list ↴ and want to check if it contains a cycle.

class Node {
  contructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
};

const n1 = new Node(123, 0);
console.log(n1);
