const express = require('express')
const Router = express.Router()

Router.get('/', function(req, res)
{
    res.json({})
})

module.exports = Router