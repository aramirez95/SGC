const express = require('express')
const route = express.Router()
const Usuario = require('../models/usuarios')
const Area = require('../models/areas')
const Estado = require('../models/estados')
const Solicitud = require('../models/solicitudes')

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

//Creacion area
route.post('/a', async(req, res)=>{
    try{
        const areas = new Area(req.body)
        await areas.save()
        res.status(201).send(areas)
    } catch (error){
        res.status(400).send(error);
    }
})

//Obtener areas
route.get('/a', async(req, res)=>{
    try{
        const areas = await Area.find()
        res.send(areas)
    } catch (error){
        res.status(500).send(error);
    }
})

//Actualizar area
route.put('/a/:id', async(req, res)=>{
    try{
        const areas = await Area.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.send(areas)
    } catch (error){
        res.status(400).send(error);
    }
})

//Eliminar area
route.delete('/a/:id', async(req, res)=>{
    try{
        await Area.findByIdAndDelete(req.params.id);
        res.send({Mensaje: "Area Eliminada"})
    } catch (error){
        res.status(500).send(error);
    }
})

//Creacion estado
route.post('/e', async(req, res)=>{
    try{
        const estados = new Estado(req.body)
        await estados.save()
        res.status(201).send(estados)
    } catch (error){
        res.status(400).send(error);
    }
})

//Obtener estado
route.get('/e', async(req, res)=>{
    try{
        const estados = await Estado.find()
        res.send(estados)
    } catch (error){
        res.status(500).send(error);
    }
})

//Actualizar estados
route.put('/e/:id', async(req, res)=>{
    try{
        const estados = await Estado.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.send(estados)
    } catch (error){
        res.status(400).send(error);
    }
})

//Eliminar estados
route.delete('/e/:id', async(req, res)=>{
    try{
        await Estado.findByIdAndDelete(req.params.id);
        res.send({Mensaje: "Estado Eliminado"})
    } catch (error){
        res.status(500).send(error);
    }
})

//Generar numero de solicitud const nsolicitudes = await Solicitud.find().Count()+1;

//Creacion solicitud
route.post('/s', async(req, res)=>{
    try{
        const solicitudes = new Solicitud(req.body)
        await solicitudes.save()
        res.status(201).send(solicitudes)
    } catch (error){
        res.status(400).send(error);
    }
})

//Obtener solicitudes
route.get('/s', async(req, res)=>{
    try{
        const solicitudes = await Solicitud.find()
        res.send(solicitudes)
    } catch (error){
        res.status(500).send(error);
    }
})

//Actualizar solicitud
route.put('/s/:id', async(req, res)=>{
    try{
        const solicitudes = await Solicitud.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.send(solicitudes)
    } catch (error){
        res.status(400).send(error);
    }
})

/*Eliminar usuario
route.delete('/:id', async(req, res)=>{
    try{
        await Usuario.findByIdAndDelete(req.params.id);
        res.send({Mensaje: "Usuario Eliminado"})
    } catch (error){
        res.status(500).send(error);
    }
})
*/

module.exports = route;