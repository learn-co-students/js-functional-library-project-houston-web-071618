fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, method) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let i = 0; i < newCollection.length; i++){
        method(newCollection[i])
      }

      return collection
    },

    map: function(collection, method) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      const newArr = []

      for (let i = 0; i < collection.length; i++){
        newArr.push(method(collection[i]))
      }

      return newArr
    },

    reduce: function(collection, method, start=0) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      for (let i = 0; i < collection.length; i++){
        start = method(start, collection[i], collection)
      }

      return start
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      for(let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){
          return collection[i]
        }
      }

      return undefined
    },

    filter: function(collection, predicate){
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      const newArr = []

      for (let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){
          newArr.push(collection[i])
        }
      }

      return newArr
    },

    size: function(collection){
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
      
    },


    //Array Functions
    first: function(collection, amount = false){
      return amount ? collection.slice(0, amount) : collection[0]
    },

    last: function(collection, amount = false){
      return amount ? collection.slice(collection.length-amount, collection.length) : collection[collection.length-1]
    },

    compact: function(collection){
      const badBad = new Set([false, null, 0, "", undefined, NaN])
      return collection.filter(el => !badBad.has(el))
    },

    sortBy: function(array, method){
      const newArr = [...array]
      return newArr.sort(function(a, b){
        return method(a)- method(b)
      })
    },

    unpack: function(receiver, arr){
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(array, shallow = false, newArr=[]){
      if(!Array.isArray(array)) return newArr.push(array)

      if(shallow){
        for(let val of array){
          (Array.isArray(val)) ? this.unpack(newArr, val) : newArr.push(val)
        }
      } else {
        for (let val of array){
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },


    uniqSorted: function(collection, method){
      const sorted = [collection[0]]

      for (let i = 1; 1 < collection.length; i++){
        if (sorted[i-1] !== collection[i])
          sorted.push(collection[i])
      }
      return sorted
    },


    uniq: function(array, isSorted = false, callback=false){

      if (isSorted){
        return fi.uniqSorted(array, callback)
      } else if (!callback){
        return Array.from(new Set(array))
      } else {


        // console.log(array)
        // console.log(callback)

        const modifiedVals = new Set()
        const blasdlalsdl = new Set()



        for (let val of array) {
        // console.log(callback)
          const moddedVal = callback(val)
           //console.log(moddedVal)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            blasdlalsdl.add(val)
           // console.log(moddedVal)
          }
        }

        return Array.from(blasdlalsdl)
      }

    },

    // uniq: function(collection, sorted=false, iteratee=false) {
    //   if (sorted) {
    //     return fi.uniqSorted(collection, iteratee)
    //   } else if (!iteratee) {
    //     return Array.from(new Set(collection))
    //   } else {


    //     const modifiedVals = new Set()
    //     const uniqVals = new Set()
    // //     for (let val of collection) {
    // //       const moddedVal = iteratee(val)
    //       if (!modifiedVals.has(moddedVal)) {
    //         modifiedVals.add(moddedVal)
    //         uniqVals.add(val)
    //       }
    //     }
    //     return Array.from(uniqVals)
    //   }


    // },

    //Object Functions

    keys: function(object){
      newArr = []

      for(let key in object){
        newArr.push(key)
      }

      return newArr
    },

    values: function(object){
      newArr = []

      for(let key in object){
        newArr.push(object[key])
      }

      return newArr
    },

    functions: function(object){
       newArr = []

       for(let key in object){
          if (typeof(object[key]) === "function"){
            newArr.push(key)
          }
       }

        return newArr
    },



    }
})()

fi.libraryMethod()