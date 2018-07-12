var astrid_x = {
  chunk: function(array, size) {
    var result = []
    for (var i = 0; i < array.length; i += size) {
      result.push(array.slice(i, size + i))
    }
    return result
  }

  compact: function(array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  }
  
}

