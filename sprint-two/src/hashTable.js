

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = [];
  var tuple = [k, v];

  if(this._storage.get(index) === undefined) {
    bucket.push(tuple);
    this._storage.set(index, bucket);
  } else {
    //bucket.push(tuple);
    var currentBucket = this._storage.get(index);
    for (var x = 0; x < currentBucket.length; x++) {
      let tuple = currentBucket[x];
      if (tuple.includes(k)) {
        tuple = [k, v];
        bucket.push(tuple)
        this._storage.set(index, bucket);
      }
    }
    this._storage.get(index).push(tuple);
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket =  this._storage.get(index); // returns 'hi'
  for (var x = 0; x < bucket.length; x++) {
    if (bucket[x][0] === k) {
      return bucket[x][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket =  this._storage.get(index); // returns 'hi'
  for (var x = 0; x < bucket.length; x++) {
    if (bucket[x][0] === k) {
      // bucket[x].splice(0,2)
      bucket.splice(x,1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


