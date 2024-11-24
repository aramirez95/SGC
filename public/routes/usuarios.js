const express = require('express')
const route = express.Router()
const Usuario = require('../models/usuarios')

//Creacion usuario
route.post('/', async(req, res)=>{
    try{
        const usuarios = new Usuario(req.body)
        await usuarios.save()
        res.status(201).send(usuarios)
    } catch (error){
        res.status(400).send(error);
    }
})

//Obtener usuarios
route.get('/', async(req, res)=>{
    try{
        const usuarios = await Usuario.find()
        res.send(usuarios)
    } catch (error){
        res.status(500).send(error);
    }
})

//Actualizar usuario
route.put('/:id', async(req, res)=>{
    try{
        const usuarios = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.send(usuarios)
    } catch (error){
        res.status(400).send(error);
    }
})

//Eliminar usuario
route.delete('/:id', async(req, res)=>{
    try{
        await Usuario.findByIdAndDelete(req.params.id);
        res.send({Mensaje: "Usuario Eliminado"})
    } catch (error){
        res.status(500).send(error);
    }
})

module.exports = route;