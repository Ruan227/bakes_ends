const mongodb = require('mongoose')

const schema = mongodb.Schema({
    nome: String,
    preco: Number,
    tamanho: String,
    tipo:String
})

const Produto = mongodb.model('produtos', schema)

module.exports = Produto