fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (let element in collection) {
          callback(collection[element])
        }
      return collection
    },

    map: function(collection, callback) {
      let newCollection = []
        for (let element in collection) {
          newCollection.push(callback(collection[element]))
        }
      return newCollection
    },

    reduce: function(collection, callback, acc = 0) {
      for (let index in collection) {
        acc = callback(acc,collection[index],collection)
      }
      return acc
    },

    find: function(collection, targetFinder) {
      for (let index in collection) {
        if (targetFinder(collection[index]) === true) {
          return collection[index]
        }
      }
    },

    filter: function(collection, callback) {
      let filtered = []
      for (let index in collection) {
        if (callback(collection[index]) === true) {
          filtered.push(collection[index])
        }
      }
      return filtered
    },

    size: function(collection) {
      let count = 0
      for (let element in collection) {
          count +=1
        }
      return count
    },

    first: function(collection, amount = 1) {
      let result = collection.slice(0,amount)
      if (result.length === 1) {
        return result[0]
      } else {
      return result
      }
    },

    last: function(collection, amount = 1) {
      let result = collection.slice(-amount)
      if (result.length === 1) {
        return result[0]
      } else {
      return result
      }
    },

    compact: function(collection) {
      let truthyArray = []
      for (let index in collection) {
        if (!!collection[index] === true) {
          truthyArray.push(collection[index])
        }
      }
      return truthyArray
    },

    sortBy: function(collection, callback) {
      let sorted = [...collection]
      return sorted.sort(function (a, b) {
        return callback(a) - callback(b)
      })
    },

    flatten: function(collection, shallow = false) {
      let arr = [...collection]

      if (shallow === false) {
        return arr.reduce(function (flat, toFlatten) {
          return flat.concat(Array.isArray(toFlatten) ? fi.flatten(toFlatten) : toFlatten);
        }, [])
      } else {
        let flattened = []

        for (let index in arr) {
          if (arr[index].constructor === Array) {
            for (let index2 in arr[index]) {
              // debugger
              flattened.push(arr[index][index2])
            }
          } else {
            flattened.push(arr[index])
          }
        }

        return flattened
      }
    },

    uniq: function(collection, sorted = true, callback = null) {
      let unique = []
      let callbackUnique = []

      for (let item in collection) {
        if (callback !== null) {
          if (callbackUnique.includes(callback(collection[item])) === false) {
            callbackUnique.push(callback(collection[item]))
            unique.push(collection[item])
          }
        } else {
          if (unique.includes(collection[item]) === false) {
            unique.push(collection[item])
          }
        }
      }
      return unique
    },

    keys: function(input){
      output = []
      for (let type in input) {
        item = {};
        item.type = type;
        output.push(item.type);
      }
      return output
    },

    values: function(input){
      output = []
      for (let type in input) {
        item = {};
        item.name = input[type];
        output.push(item.name);
      }
      return output
    },

    functions: function(input){
      output = []
      for (let type in input) {
        item = {}
        item.type = type
        item.name = input[type]
        if (typeof item.name === "function") {
          output.push(item.type)
        }
      }
      return output
    },

    giveMeMore: function(){
      return true
    }

  }
})()

fi.libraryMethod()
