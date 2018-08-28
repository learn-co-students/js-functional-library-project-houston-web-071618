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

    reduce: function(collection, callback, total = 0) {
      for (let i = 0; i < collection.length; i++) {
        total += collection[i] * 3
      } //end for loop
        return total
    }, // end function

    find: function(collection, callback) {
      if ( collection.constructor === Array) {
        for (i = 0; i < collection.length; i++) {
          if (callback(collection[i])){
            return collection[i];
          }//end if
        }//end for
        return undefined;
      }//end if
    },//end find

    filter: function(collection, callback){
      newArray = []
      for (let i = 0; i < collection.length; i++){
        if (callback(collection[i])) {
          newArray.push(collection[i])
        }//ends if
      }// ends for
      return newArray
    }, // ends function

    size: function(collection){
      newArray = []
      if (collection.constructor === Array) {
        return collection.length
      } else if (collection.constructor === Object){
        for (let key in collection) {
          newArray.push(key)
        }
      return newArray.length
      }


    },

    first: function(collection, finish=1){
      newArray = []
      //console.log(`collection = ${collection}, finish = ${finish}`);
      if (collection.length > 1){
        for (let i = 0; i < finish ;i++){
          newArray.push(collection[i]);
        }
        //console.log(`newArray = ${newArray}`);
      }// end if
      if (newArray.length === 1){
        return newArray[0];
      } else {return newArray}
    },

    last: function(collection, finish = 1) {
      if (finish === 1) {
        return collection[collection.length - 1]
      } else {
        return collection.slice(collection.length - finish, collection.length)
      }
    },


    compact: function(collection){
      newArray = [];
      for (i = 0; i < collection.length; i++){
        if (!!collection[i]){
          newArray.push(collection[i])
        }
      }
      return newArray;
    },

    sortBy: function(collection, callback){
        let tempArray = collection.slice()
        tempArray.sort(function(a,b){return callback(a)-callback(b)});
        //console.log(`tempArray = ${tempArray}`)
        return tempArray;
    },//end sortBy

    // uniq: function(collection, isSorted, callback) {
    //   if (isSorted === false)
    //     collection.sortBy()
    // }
    keys: function (collection) {
      newArray = []

      for (let key in collection) {
        newArray.push(key)
      }
      return newArray
    },

    values: function (collection) {
      newArray = []

      for (let key in collection) {
        newArray.push(collection[key])
      }
      return newArray
    },

    functions: function(collection) {
      newArray = []

      for (let key in collection) {
        console.log(key)
        newArray.push(key)
      }
      return newArray

    },


  }
})()

fi.libraryMethod()
