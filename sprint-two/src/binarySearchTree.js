var BinarySearchTree = function(value) {
  // this.newTree = {};
  // this.children = [];
  // console.log(BinarySearchTree.prototype);

  var newTree = {};
  newTree.value = value;
  newTree.left = undefined;
  newTree.right = undefined;


  _.extend(newTree, bstMethods);
  return newTree;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  // if a value hasn't been set
  if (value > this.value && !this.right) {
    this.right = BinarySearchTree(value);
  } else if (value < this.value && !this.left) {
    this.left = BinarySearchTree(value);
  }

  // if a value has been set - use call to pass a new object to use as 'this'
  if (this.right && value > this.value) {
    bstMethods.insert.call(this.right, value);
  } else if (this.left && value < this.value) {
    bstMethods.insert.call(this.left, value);
  }
}

bstMethods.contains = function(value) {
  var boolean = false;

  if (this.value === value) {
    boolean = true;
  } else if (this.left && this.left.value === value) {
    boolean = true;
  } else if (this.right && this.right.value === value) {
    boolean = true;
  } else if (this.left) {
    bstMethods.contains.call(this.left, value);
  } else if (this.right) {
    bstMethods.contains.call(this.right, value);
  }


  return boolean;
}

bstMethods.depthFirstLog = function(callback) {
  console.log(this);
  // check this's value
  if (this.value) {
    callback(this.value);
  }
  // if the left exists, use call to reset 'this' to the left node
  if (this.left) {
    bstMethods.depthFirstLog.call(this.left, callback)
  }
  // if the right exists, use call to reset 'this' to the right node
  if (this.right) {
    bstMethods.depthFirstLog.call(this.right, callback);
  }
}

// BinarySearchTree.prototype.insert = function (value) {
//   console.log(value);
//   return value
// }

// BinarySearchTree.prototype.contains = function (value) {

// }

// BinarySearchTree.prototype.depthFirstLog = function() {

// }

/*
 * Complexity: What is the time complexity of the above functions?
 */
