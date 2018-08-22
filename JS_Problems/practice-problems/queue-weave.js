// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

function weave(a, b) {
  const q = new Queue();

  while (a.peek() || b.peek()) {
    if(a.peek()){
      q.add(a.remove())
    }

    if(b.peek()){
      q.add(b.remove())
    }
  }

  return q;
}
