const Yaml = require('yaml')
const parser = require('./parser.js')

function httpToOp(req, def) {

  const ops = parser.getOperations(def)

  const op =  ops.find(op => {
    return op.method == req.method.toLowerCase()
  })

  return op
}

module.exports = function({def, mapper}) {
 def = Yaml.parse(def)
  return (req, res, next) => {
    const op = httpToOp(req, def)
    return mapper(op)(req, res, next)
  }
}
