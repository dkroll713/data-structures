
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};

  someInstance.storage = {};

  var extend = function(obj1, obj2) {
    for (var key in obj2) {
      obj1[key] = obj2[key];
    }
  };

  extend(someInstance, queueMethods);
  return someInstance;
};

var enqueue = function(value) {
  this.storage[value] = Queue();
};

var dequeue = function() {
  var first = 0;
  for (var key in this.storage) {
    if (first === 0) {
      first = key;
    }
  }
  delete this.storage[first];
  return first;
};

var size = function() {
  var count = 0;
  for (var key in this.storage) {
    count++;
  }
  return count;
};

var queueMethods = { enqueue: enqueue, dequeue: dequeue, size: size};

var newQueue = Queue();
newQueue.enqueue('a');