module.exports.getOperations = function(def) {
  let ops = []

  for(let [path,methodObj] of Object.entries(def.paths)) {
    for(let [method, opObj] of Object.entries(methodObj)) {
      ops.push({
        path,
        method,
        ...opObj
      })
    }
  }

  return ops
}
