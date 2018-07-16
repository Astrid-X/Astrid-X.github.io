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
    for (var i = 0; i < array.length - n; i++) {
      res.push(array[i])
    }
    return res
  },
}


