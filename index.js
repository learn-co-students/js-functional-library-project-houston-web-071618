fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(object, callback) {
      for(let i in object){
      // for([1,2,3,4,5], callback)
        callback(object[i])
      }
      return object
    },

    map: function(array, callback) {
      const newArray = []
      for (let i in array) {
        newArray.push(callback(array[i]))
      }
      return newArray
    },

    reduce: function(array, callback, agg) {
      agg = agg ? agg : 0
      for (let i = 0; i < array.length; i++) {
        agg = callback(agg, array[i])
      }
      return agg
    },

     find: function(array, callback) {
       //find returns first value that equates to true.
       for (let i = 0; i < array.length; i++) {
         if(callback(array[i])) {
           return array[i]
         }
       }
     },
     
     filter: function(array, callback) {
       newArray = []
       for (let i = 0; i < array.length; i++) {
         if(callback(array[i])) {
           newArray.push(array[i])
         }
       }
       return newArray
     },
     
     size: function(collection){
       //
       let counter = 0
       for (var something in collection){
         counter++
       }
       return counter;
     },
     
    first: function(array, n) {
      newArray = []
      if (n) {
        for (let i = 0; i < n; i++) {
          newArray.push(array[i])
        }
        return newArray
      } else {
        newArray.push(array[0])
        return newArray[0]
      }
    },
    
    last: function(array,n) {
      newArray = []
      if (n > 0) {
        newArray = array.slice(array.length-n, array.length)
        return newArray
      } else {
        newArray.push(array[array.length-1])
        return newArray[0]
      }
    },
    
    compact: function(array) {
      newArray = []
      for (let i in array) {
        if (!!array[i]) {
          newArray.push(array[i])
        }
      }
      return newArray
    },
    
    sortBy: function(array, callback) {
      sortedArray = [...array]
      return sortedArray.sort(function(a,b) {
        return callback(a) - callback(b)
      })
    },
    
    flatten: function(array, shallow=false) {
      let newArray = []
      
      for (let i in array) {
        if (!shallow && typeof array[i] == 'object') {
          newArray = newArray.concat(this.flatten(array[i]))
        } else if (typeof array[i] == 'object') {
          newArray = newArray.concat(array[i])
        } else {
          newArray.push(array[i])
        }
      }
      return newArray
    }, 
    
    uniq: function(array, isSorted, callback) {
     newArray = []
     for (let i in array) {
       let compareValue = !!callback ? callback(array[i]) : array[i]
       let duplicate = false
       
       if (isSorted) {
         if (array[i] === array[i+1]) {
           duplicate = true
         }
       } else {
         for (let j in newArray) {
           if (compareValue === newArray[j]) {
             duplicate = true
             break
           }
         }
       }
         
         if (!duplicate) {
           newArray.push(compareValue)
         }
       }
       return newArray
     },
    
    keys: function(object) {
      keyArray = []
      for (let key in object) {
        keyArray.push(key)
      }
      return keyArray
    },
    
    values: function(object) {
      valueArray = []
      for (let key in object) {
        valueArray.push(object[key])
      }
      return valueArray
    },
    
    functions: function(object) {
      newArray = []
      for (let property in object) {
        if (typeof object[property] == 'function') {
          newArray.push(property)
        }
      }
      return newArray.sort()  
    },


  }
})()

fi.libraryMethod()