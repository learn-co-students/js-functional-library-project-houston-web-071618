fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: 
    function(collection, callback) {
      for (const i in collection) {
        callback(collection[i], i, collection)
      };
      return collection
    },

    map: 
    function(collection, callback) {
      const newCollection = [];
        for (let i in collection) {
          newCollection.push(callback(collection[i])
        )};
      return newCollection
     },
// var sum = fi.reduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 0);
    reduce: function(collection, callback, acc = 0) {
      for (let i in collection) {
        acc = callback(acc, collection[i], collection)
      }
      return acc;
    },
    
    find: function(collection, callback) {
      for (let i in collection) {
        if (callback(collection[i]))
        return collection[i];
      }
    },

    filter: function(collection, callback) {
      let array = [];
      for (let i in collection) {
        if (callback(collection[i]))
        array.push(collection[i]);
      }
      return array
    },

    size: function(collection) {
      let array = (collection.isArray) ? collection.slice() : Object.values(collection);
      return array.length;
    },

    first: function(array, n=1) {
      let arrayNew = [];
      for (let i=0; i<n; i++) {
        arrayNew.push(array[i]);
      }
      return n === 1 ? arrayNew[0] : arrayNew;
    },

    last: function(array, n=1) {
      let arrayNew = [];
      let counter=  0;
      for (let i = array.length -1; counter < n; i--, counter++) {
        arrayNew.unshift(array[i]);
      }
      return n === 1 ? arrayNew[arrayNew.length-1] : arrayNew;
    },

    compact: function(array) {
      let arrayNew = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i]){arrayNew.push(array[i]);}
      }
      return arrayNew;
    },

  }
})()

fi.libraryMethod()
