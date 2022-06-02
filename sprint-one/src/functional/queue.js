var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[value] = Queue();
  };

  someInstance.dequeue = function() {
    var first = 0;
    for (var key in storage) {
      if (first === 0) {
        first = key;
      }
      delete storage[first];
      return first;
    }
  };

  someInstance.size = function() {
    var count = 0;
    for (var key in storage) {
      count++;
    }
    return count;
  };

  return someInstance;
};

var queue = Queue('a');

queue.enqueue('a');
queue.enqueue('b');
queue.dequeue();