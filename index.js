fi = (function () {
  return {
    libraryMethod: function () {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    //this is the function for using the cb with for...in
    each: function (collection, cb) {
      // each: function(collection, alert) {
      // const newCollection =
      //   typeof collection.length === "number"
      //     ? collection.slice()
      //     : Object.values(collection);
      // for (i = 0; i < newCollection.length; i++) {
      //   alert(newCollection[i]);
      // }

      for (let i in collection) {
        cb(collection[i], i, collection);
      }
      return collection;
    },

    map: function (collection, alert) {
      const newContainer = [];
      const newCollection =
        typeof collection.length === "number"
          ? collection.slice()
          : Object.values(collection);
      for (i = 0; i < newCollection.length; i++) {
        newContainer.push(alert(newCollection[i]));
      }
      return newContainer;
    },

    reduce: function (collection, callback, acc = 0) {
      for (i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
      return acc;
    },

    find: function (collection, predicate) {
      for (i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) return collection[i];
      }
      return undefined;
    },
    filter: function (collection, predicate) {
      const newArr = [];
      for (i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) newArr.push(collection[i]);
      }
      return newArr;
    },

    size: function (collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length;
    }

    // first: function() {}

    // },

    // last: function() {}

    // },

    // compact: function() {}

    // },

    // sortBy: function() {}

    // },

    // unpack: function() {}

    // },

    // flatten: function() {}

    // },

    //     functions: function() {}
  };
})();

fi.libraryMethod();
