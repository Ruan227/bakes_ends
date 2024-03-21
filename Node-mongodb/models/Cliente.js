
const mongodb = require('mongoose')

const ClienteSchema= mongodb.Schema({
    nome: String,
})

const Cliente = mongodb.model('TM_FILENAME_BASE',Schema)

module.exports = Cliente