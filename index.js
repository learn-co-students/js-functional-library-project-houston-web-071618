fi = (function() {
  return {
    libraryMethod: function() {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    //this is the function for using the cb with for...in
    each: function(collection, callback) {
      const newCollection = Array.isArray(collection)
        ? collection.slice()
        : Object.values(collection);
      for (i = 0; i < newCollection.length; i++) {
        const item = newCollection[i];
        callback(item, i, newCollection);
      }
      return collection;
    },

    map: function(collection, callback) {
      const result = [];
      const newCollection =
        typeof collection.length === "number"
          ? collection.slice()
          : Object.values(collection);
      for (i = 0; i < newCollection.length; i++) {
        result.push(callback(newCollection[i]));
      }
      return result;
    },

    reduce: function(collection, callback, acc = 0) {
      for (i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
      return acc;
    },

    find: function(collection, predicate) {
      for (i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) return collection[i];
      }
      return undefined;
    },

    filter: function(collection, predicate) {
      const newArr = [];
      for (i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) newArr.push(collection[i]);
      }
      return newArr;
    },

    size: function(collection) {
      return collection instanceof Array
        ? collection.length
        : Object.keys(collection).length;
    },

    first: function(array, n) {
      if (n) {
        return array.slice(0, n);
      }
      return array[0];
    },

    last: function(array, n) {
      if (n) {
        return array.slice(array.length - n);
      }
      return array[array.length - 1];
    },

    compact: function(array) {
      let arrayNew = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          arrayNew.push(array[i]);
        }
      }
      return arrayNew;
    },

    sortBy: function(collection, callback) {
      const newArr = [...collection];
      //can also use const newArr = array.slice();
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b);
      });
    },

    unpack: function(receiver, arr) {
      for (let val of arr) receiver.push(val);
    },

    flatten: function(collection, shallow, newArr = []) {
      if (shallow) {
        for (let val of collection) {
          if (Array.isArray(val)) {
            for (let elem of val) {
              newArr.push(elem);
            }
          } else {
            newArr.push(val);
          }
        }
        return newArr;
      } else {
        for (let val of collection) {
          if (Array.isArray(val)) {
            fi.flatten(val, false, newArr);
          } else {
            newArr.push(val);
          }
        }
        return newArr;
      }
    },

    uniq: function(array, isSorted, callback) {
      const newArray = [];
      for (i = 0; i < array.length; i++) {
        let duplicate = false;
        for (j = 0; j < newArray.length; j++) {
          if (callback != undefined) {
            if (callback(newArray[j]) === callback(array[i])) duplicate = true;
          } else {
            if (newArray[j] === array[i]) {
              duplicate = true;
            }
          }
        }
        if (!duplicate) newArray.push(array[i]);
      }
      return newArray;
    },

    keys: function(object) {
      return Object.keys(object);
    },

    values: function(object) {
      return Object.values(object);
    },

    functions: function(obj) {
      const functionNames = [];
      for (let key in obj) {
        if (typeof obj[key] === "function") {
          functionNames.push(key);
        }
      }
      return functionNames.sort();
    }

    //     functions: function() {}
  };
})();

fi.libraryMethod();
