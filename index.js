fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      const newCollection = (collection.isArray) ? collection.slice() : Object.values(collection)
      for (let i = 0; i < newCollection.length; i ++) {
        iteratee(newCollection[i])
      };
      return collection
    },

    map: function(collection, iteratee) {
      tempCollection = collection.isArray ? collection.slice() : Object.values(collection)
      let newCollection = []
      for (let i = 0; i < tempCollection.length; i ++) {

        newCollection.push(iteratee(tempCollection[i], i, collection))
      };
      return newCollection
    },

    reduce: function(collection, callback, acc = 0) {
      for (let i in collection) {
        acc = callback(acc, collection[i], collection)
      };
      return acc;
    },

    find: function(collection, predicate) { 
      for (let i  in collection) {
        if (predicate(collection[i]))
        return collection[i];
      }
    },
    
    filter: function(collection, predicate){
      array = []
      for (let i in collection) {
        if (predicate(collection[i]))
        array.push(collection[i]);
      };
      return array;
    },

    size: function(collection){
      howMany = (collection.isArray) ? collection.slice() : Object.values(collection)
      return howMany.length;
    },

    first: function(array, n=1) {
      arrayNew = [];
      for ( let i = 0; i < n; i ++){
        arrayNew.push(array[i]);
      }
      return n === 1 ? arrayNew[0] : arrayNew;
    },

    last: function(collection, start=false) {
      return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1]
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()

