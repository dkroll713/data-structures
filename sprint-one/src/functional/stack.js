var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below

  // when adding to the stack
  someInstance.push = function(value) {
    // set stack at value equal to new object
    storage[value] = Stack();
  };

  // when removing from the stack
  someInstance.pop = function() {
    // create variable for last value
    var lastValue;
    // for each key in storage
    for (var key in storage) {
      // set lastValue to equal the key
      lastValue = key;
    }
    // remove the last key from the storage object
    delete storage[lastValue];
    // return the last value to show what was removed
    return lastValue;
  };

  // when checking the size of the stack
  someInstance.size = function() {
    // set count equal to zero
    var count = 0;
    // for each key in storage
    for (var key in storage) {
      // increment count by 1
      count++;
    }
    // return the count
    return count;
  };
  return someInstance;
};

var newStack = Stack(1);
newStack.push('a');
newStack.pop();