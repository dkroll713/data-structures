var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // O(1) time complexity

  list.addToTail = function(value) {
    let node = Node(value);
    if(list.head === null) {
      list.head = node;
    }else{
      list.tail.next = node;
    }
    list.tail = node;
  };

  // O(1) constant time complexity

  list.removeHead = function() {
    let formerHead = list.head;
    delete list.head;
    list.head = formerHead.next;
    return formerHead.value;
  };

  // O(n) linear time complexity

  list.contains = function(target) {
    console.log(target);
    // set current node to the list head
    var currentNode = list.head;
    // while currentNode is not null
    while(currentNode) {
      // if currentNode's value is equal to the target
      console.log(currentNode);
      if(currentNode.value === target) {
        console.log('inside');
        // return true
        return true;
      // otherwise
      }else{
        // set currentNode to the next node
        currentNode = currentNode.next;
      }
    }
    // if the while loop exits because currentNode is null, return false
    return false
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
