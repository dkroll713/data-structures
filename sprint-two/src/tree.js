var Tree = function(value) {
  var newTree = {};
  newTree.value = value;



  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var boolean = false;

  var search = function(item) {
    if (item.value === target) {
      boolean = true;
    }
    if (item.children.length > 0) {
      for( var x = 0; x < item.children.length; x++) {
        boolean = search(item.children[x]);
      }
    }
    return boolean;
  }

  search(this)
  return boolean;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
