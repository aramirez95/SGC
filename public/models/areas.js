const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var areaSchema = Schema({
    codigo: Number,
    nombrea: String,
    estado: Number
})

module.exports = mongoose.model('Areas', areaSchema);