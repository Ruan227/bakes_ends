const express = require('express');
const { model } = require('mongoose');
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}))

const conn = require('./db/conn')
conn()

const routes = require('./routes/routes')
app.use('/', routes)

app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000")
})