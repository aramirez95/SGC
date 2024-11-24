const express = require('express')
const app = express()
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

//settings
app.set('port', 773);
app.use(cors());
app.use(bodyParser.json());

//middlewares
app.use(express.static(path.join(__dirname,'public')));
console.log(__dirname);

//routes
app.get('/',(req,res)=>{res.send("Proyecto SENA")});
app.use('/api/usuarios', require('./public/routes/usuarios'))

//base de datos
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/proyecto')
        .then(()=>{
            console.log("Conectado a la base de Datos");
            // Crear Servidor
            app.listen(app.get('port'),()=>{console.log(`Aplicacion por puerto:${app.get('port')}`)});
        })
        .catch(err => console.log(err));