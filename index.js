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

    map: function(collection, callback) {
      newArray = [];
      if ( collection.constructor === Array){
        for (let i = 0; i < collection.length; i++){
          newArray.push(collection[i] * 3);
        }//end for
        return newArray;
      }//end if
      else if (collection.constructor === Object){
        for (const key in collection) {
          //x = Object.assign({}, obj, { [key]: value * 3});
          newArray.push(collection[key] * 3);
        }//end for
        return newArray;
      }//end else
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
