var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};

  someInstance.storage = {};

  var extend = function(obj1, obj2) {
    for (var key in obj2) {
      obj1[key] = obj2[key];
    }
  };

  extend(someInstance, stackMethods);
  return someInstance;
};

var push = function(value) {
  this.storage[value] = Stack();
};

var pop = function() {
  var lastValue;
  for (var key in this.storage) {
    lastValue = key;
  }
  delete this.storage[lastValue];
  return lastValue;
};

var size = function() {
  var count = 0;
  for (var key in this.storage) {
    count++;
  }
  return count;
};

var stackMethods = { push: push, pop: pop, size: size};