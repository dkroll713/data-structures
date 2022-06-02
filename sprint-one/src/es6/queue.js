class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.someInstance = {};
    this.storage = {};
  }

  enqueue(value) {
    this.storage[value] = new Queue();
  }

  dequeue() {
    var first = 0;
    for (var key in this.storage) {
      if (first === 0) {
        first = key;
      }
    }

    delete this.storage[first];
    return first;
  }

  size() {
    var count = 0;
    for (var key in this.storage) {
      count++;
    }
    return count;
  }
}
