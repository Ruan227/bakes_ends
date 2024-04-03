const mongodb = require('mongoose')

const schema = mongodb.Schema({
    nome: {
        type: String,
        required: true,
        lowercase: true,
        minLength: 3,
        trim: true,
        match: /^[a-zA-ZÀ-ú0-9\s']+$/,
    },
    preco: {
        type: Number,
        required: true,
        min: 0, 
    },
    tamanho: { 
        type: String,
        lowercase: true,
        required: true,
        trim: true,},
    tipo:{  
        type: String,
        required: true,
        lowercase: true,
        minLength: 2,
        trim: true,
        enum: ['alimento', 'bebida', 'vestuário']}
})

const Produto = mongodb.model('produtos', schema)

module.exports = Produto