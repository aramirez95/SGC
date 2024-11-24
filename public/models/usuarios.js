const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var usuarioSchema = Schema({
    nombres: String,
    email: String,
    clave: String,
    tipoUsuario: Number,
    area: Number,
    estado: Number
})

module.exports = mongoose.model('Usuario', usuarioSchema);