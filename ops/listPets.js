module.exports = function(req, res, next) {
  res.send({
    pets: [
      {id: 1, name: "Fido"},
      {id: 2, name: "Rex"},
      {id: 3, name: "Bowser"},
    ]
  })
}
