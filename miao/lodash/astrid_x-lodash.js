var astrid_x = {
  chunk:
  function(array, size) {
    let result = []
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, size + i))
    }
    return result
  },

  compact:
  function(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  },

  difference:
  function(array,...value) {
    let res = []
    let val = value[0]
    for (let i = 1; i < value.length; i++) {
      val = val.concat(value[i])
    }
    for (let k = 0; k < array.length; k++) {
      if (!val.includes(array[k])) {
        res.push(array[k])
      }
    }
    return res
  },

  drop:
  function(array, n = 1) {
    let res = []
    for (let i = n; i < array.length; i++) {
      res.push(array[i])
    }
    return res
  },

  dropRight:
  function(array, n = 1) {
    let res = []
    if (n >= array.length) {
      return res
    }
    for (let i = 0; i < array.length - n; i++) {
      res.push(array[i])
    }
    return res
  },

  fill:
  function(array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },

  flatten:
  function(array) {
    let res = []
    for (let i = 0; i < array.length; i++) {
      if (array[i].length) {
        for (let j = 0; j < array[i].length; j++) {
          res.push(array[i][j])
        }
      } else {
        res.push(array[i])
      }
    }
    return res
  },

  flattenDeep:
  function(array) {
    let res = []
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        let tmp = flattenDeep(array[i])
        res = [...res, ...tmp]
      } else {
        res.push(array[i])
      }
    }
    return res
  },

  flattenDepth:
  function(array, depth = 1) {
    if (depth === 0) {
      return array.slice()
    }
    let res = []
    for(let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        let tmp = flattenDepth(array[i], depth - 1)
        res = [...res, ...tmp]
      } else {
        res.push(array[i])
      }
    }
    return res
  },  

  head:
  function(array) {
    return array[0]
  },

  initial:
  function(array) {
    let res = []
    for (let i = 0; i < array.length - 1; i++) {
      res.push(array[i])
    }
    return res
  },

  last:
  function(array) {
    return array[array.length - 1]
  },

  indexOf:
  function(array, value, fromIndex = 0) {
    if (fromIndex < 0) {
      fromIndex += array.length
    }
    for (let i = fromIndex; i < array.length; i++) {
      if (array[i] === value) {
        return i
      } else if (value !== value && array[i] !== array[i]) {
        return i
      }
    }
    return -1
  },

  lastIndexOf:
  function(array, value, fromIndex = array.length - 1) {
    for (let i = fromIndex; i > 0; i--) {
      if (array[i] === value) {
        return i
      } else if (value !== value && array[i] !== array[i]) {
        return i
      }
    }
    return -1
  },

  nth:
  function(array, n = 0) {
    if (n >= 0) {
      return array[n]
    }
    if (n < 0) {
      return array[array.length + n]
    }
  },

  pull:
  function(array, ...value) {
    let arrrayLen = array.length
    let valueLen = value.length
    for (let i = arrrayLen; i >= 0; i--) {
        for (let j = value.length; j >= 0; j--) {
            if (array[i] === value[j]) {
                array.splice(i, 1)
            }
        }
    }
    return array
  },  

  reverse:
  function(array) {
    let res = []
    for (var i = array.length - 1; i >= 0; i--) {
      res.push(array[i])
    }
    return res
  },

  join:
  function(array, separator = ',') {
    let res = '' + array[0]
    for (let i = 1; i < array.length; i++) {
      res += String(separator) + array[i] 
    }
    return res
  },

  sum:
  function(array) {
    return sumBy(array, identity)
  },

  sumBy:
  function(array, predicate = identity) {
    predicate = iteratee(predicate)
    let res = 0
    for (let i = 0; i < array.length; i++) {
      res += predicate(array[i])
    }
    return res
  },

  identity:
  function(value) {
    return value
  },

  matches:
  function(src) {
    return function(obj) {
      for (let key in src) {
        if (src[key] !== obj[key]) {
          return false
        }
      }
      return true
    }
  },

  ary:
  function(func, n = func.length) {
    return function(...args) {
      return func(...args.slice(0, n))
    }
  },

  unary:
  function(func) {
    return function(value) {
      return func(value)
    }
  },

  negate:
  function(func) {
    return function(...args) {
      return !func(...args)
    }
  },

  spread:
  function(func) {
    return function(ary) {
      return func.apply(null, ary)
    }
  },

}
