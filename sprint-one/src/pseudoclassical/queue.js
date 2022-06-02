var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  someInstance = {};
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[value] = Queue();
};

Queue.prototype.dequeue = function() {
  var first = 0;
  for (var key in this.storage) {
    if (first === 0) {
      first = key;
    }
  }
  delete this.storage[first];
  return first;
};

Queue.prototype.size = function() {
  var count = 0;
  for (var key in this.storage) {
    count++;
  }
  return count;
};