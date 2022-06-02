var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  someInstance = {};
  this.storage = {};
};

Stack.prototype.storage = {};

Stack.prototype.push = function(value) {
  this.storage[value] = Stack();
};

Stack.prototype.pop = function() {
  var last = 0;
  for (var key in this.storage) {
    last = key;
  }
  delete this.storage[last];
  return last;
};

Stack.prototype.size = function() {
  var count = 0;
  for (var key in this.storage) {
    count++;
  }
  return count;
};

var newStack = new Stack();
console.log(newStack);