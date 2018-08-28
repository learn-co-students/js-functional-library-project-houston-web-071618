fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      //iterate through the collectionay and push it to a new collectionay.
      if ( collection.constructor === Array) {
        for (i = 0; i<collection.length; i++) {
          callback(collection[i])
        }
      } else if (collection.constructor === Object) {
        for (const key in collection) {
          callback(collection[key])
        }
      }
      return collection
    },

    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
