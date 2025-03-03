const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var estadoSchema = Schema({
    codigo: Number,
    nombree: String,
    estado: Number
})

module.exports = mongoose.model('Estados', estadoSchema);