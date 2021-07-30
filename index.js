const express = require('express')
const Yaml = require('yaml')
const fs = require('fs')
const path = require('path')
const router = require('./router.js')
const petstoreYaml = fs.readFileSync(path.join(__dirname, './petstore.yaml'), 'utf8')

const app = express()
app.use(router({def: petstoreYaml, mapper: (op) => {
    // Get the function that'll respond to this request
    // const opFn = require(path.join(__dirname, `./ops/${op.operationId}.js`))
    if(op.operationId == 'listPets')
        return (req, res, next) => {
            res.send('Petsssssss!' + req.query.petName)
        }

    return () => {}
    // return opFn
}}))

app.get('/hello', (req, res, next) => {
    
})

const server = app.listen('3000', () => {
    console.log("listening-/", server.address().address, server.address().port)
})

