

// Instantiate a new graph
var Graph = function() {
  this.storage = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //console.log('node:', node);
  let element = {
    val: node,
    edge: [],
  }
  this.storage.push(element);
  //console.log(this.storage);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //console.log('node being looked for:', node);
  let boolean = false;

  for (let x = 0; x < this.storage.length; x++) {
    if(this.storage[x].val === node) {
      boolean = true;
    }
  }

  return boolean;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for ( let x = 0; x < this.storage.length; x++) {
    if (this.storage[x].edge.includes(node)) {
      for (let y = 0; y < this.storage[x].edge.length; y++) {
        //
        //console.log(this.storage[x].edge[y]===node)
        this.storage[x].edge.splice(y, 1);
        //
      }
    }
    if (this.storage[x].val === node) {
      this.storage.splice(x, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  let boolean = false;
  for( let x = 0; x < this.storage.length; x++) {
    if(this.storage[x].val === fromNode && this.storage[x].edge.includes(toNode)) {
      boolean = true;
    }
  }
  return boolean;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for( let x = 0; x < this.storage.length; x++) {
    if(this.storage[x].val === fromNode) {
      this.storage[x].edge.push(toNode);
    }
    if(this.storage[x].val === toNode) {
      this.storage[x].edge.push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for( let x = 0; x < this.storage.length; x++) {
    if(this.storage[x].val === fromNode && this.storage[x].edge.includes(toNode)) {
      // this.storage[x].edge = undefined;
      for (let y = 0; y < this.storage[x].edge.length; y++) {
        if (this.storage[x].edge[y] === toNode) {
          this.storage[x].edge.splice(y, 1);
        }
      }
    }
    if (this.storage[x].val === toNode && this.storage[x].edge.includes(fromNode)) {
      // this.storage[x].edge = undefined;
      for (let y = 0; y < this.storage[x].edge.length; y++) {
        if (this.storage[x].edge[y] === fromNode) {
          this.storage[x].edge.splice(y, 1);
        }
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  console.log('before callback executes:', this.storage);
  for (var x = 0; x < this.storage.length; x++) {
    cb(this.storage[x].val);
  }
  console.log('storage after:', this.storage)
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


