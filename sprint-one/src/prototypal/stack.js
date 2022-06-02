var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[value] = Stack();
};

stackMethods.pop = function() {
  var last;
  for (var key in this.storage) {
    last = key;
  }

  delete this.storage[last];
  return last;
};

stackMethods.size = function() {
  var count = 0;
  for (var key in this.storage) {
    count++;
  }
  return count;
};