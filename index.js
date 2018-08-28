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
      debugger
      let truthyArray = []
      for (let index in collection) {
        if (!!collection[index] === true) {
          truthyArray.push(collection[index])
        }
      }
      return truthyArray
    },

    sortBy: function() {
      for (let index in collection) {

      }
    },

    flatten: function() {
      for (let index in collection) {

      }
    },

  }
})()

fi.libraryMethod()
