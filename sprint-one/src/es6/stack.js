class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.someInstance = {};
    this.storage = {};
  }

  push(value) {
    this.storage[value] = new Stack();
  }

  pop() {
    var last;
    for (var key in this.storage) {
      last = key;
    }
    delete this.storage[last];
    return last;
  }

  size() {
    var count = 0;
    for (var key in this.storage) {
      count++;
    }
    return count;
  }

}