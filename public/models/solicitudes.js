const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var solicitudesSchema = Schema({
    id_solicitud: Number,
    tipo: String,
    fechaA: Date,
    estado_sol: String,
    email: String,
    asunto: String,
    otro: String,
    detalle: String,
    respuesta: String,
    area: Number,
    usuario_c: String,
    usuario_r: String
})

module.exports = mongoose.model('Solicitudes', solicitudesSchema);