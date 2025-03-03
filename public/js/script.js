// script.js
const apiURL = 'http://localhost:773/api/usuarios'
var contador = 0;
var ac=0;
//funcion para obtener todos las solicitudes
async function getSolicitudes(){
    console.log('Cargar Solicitudes');
    const response =await fetch(`${apiURL}/s`);
    const solicitudes = await response.json();
    const solicitudesContainer = document.getElementById('Solicitudes');
    solicitudesContainer.innerHTML = "";
    solicitudes.forEach(solicitud => {
        solicitudesContainer.innerHTML+= 
        `
                    <tr>
                        <th scope="row">${solicitud.id_solicitud}</th>
                        <td>${solicitud.fechaA}</td>
                        <td>${solicitud.asunto}</td>
                        <td>${solicitud.estado_sol}</td>
                        <td>${solicitud.usuario_c}</td>
                        <td><button onclick="updateUsuario('${solicitud._id}')">Gestionar</td>
                    </tr>
        `;
    });
}

async function getSolicitudes2(){
    console.log('Cargar Solicitudes');
    const response =await fetch(`${apiURL}/s`);
    const solicitudes = await response.json();
    solicitudes.forEach(solicitud => {
        ac++
        });
    contador=ac;
    console.log(contador);
    document.getElementById("Id_Solicitud").value = contador+1;
}

//funcion para agregar solicitudes
async function addSolicitud() {
    console.log('Registrar Solicitud');
    const id_solicitud = document.getElementById("Id_Solicitud").value;
    const tipo = document.getElementById('tipos').value;
    let fechaA ="";
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    if(month < 10){
        if(day < 10){
            fechaA =`0${day}-0${month}-${year}`;
        }else{
            fechaA = `${day}-0${month}-${year}`;
        }
    }else{
        if(day < 10){
            fechaA =`0${day}-${month}-${year}`;
        }else{
            fechaA = `${day}-${month}-${year}`;
        }
    }
    console.log(fechaA);
    const estado_sol = "Radicado";
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asuntos').value;
    const otro = document.getElementById('oasunto').value;
    const detalle = document.getElementById('detalle').value;
    const respuesta = document.getElementById('respuesta').value;  
    const usuario_c = 1;
    const usuario_r = 2;
    const area = 2;
    const estado = "Abierto";
    console.log('Crear Solicitud ', id_solicitud,tipo,fechaA,estado_sol,email,asunto,otro,detalle,respuesta,usuario_c,usuario_r,area,estado);
    console.log(JSON.stringify({ id_solicitud,tipo,fechaA,estado_sol,email,asunto,otro,detalle,respuesta,usuario_c,usuario_r,area,estado }));
    await fetch(`${apiURL}/s`,{
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({ id_solicitud,tipo,fechaA,estado_sol,email,asunto,otro,detalle,respuesta,usuario_c,usuario_r,area,estado })
    })
    alert("Solicitud Registrada Correctamente");
    location.href="http://localhost:773/html/home.html";
}

//funcion para actualizar solicitudes
async function updateUsuario(id) {
    console.log('actualiza Usuario ', id);
    const nombres = prompt("Nuevo nombre:");
    const email = prompt("Nueva correo:");
    const clave = prompt("Nueva clave:");
    const tipousuario = prompt("Nuevo tipo de usuario:");
    const area = prompt("Nueva area:");
    const estado = prompt("Nuevo estado:");
    console.log('Datos nuevos ', nombres,email,clave,tipousuario,area,estado);
    console.log(JSON.stringify({ nombres, email, clave, tipousuario, area, estado }));
    await fetch(`${apiURL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombres, email, clave, tipousuario, area, estado })
    })
    getUsuarios();
}

//funcion para obtener todos los usuarios
async function getUsuarios(){
    console.log('Cargar Usuario');
    const response =await fetch(apiURL);
    const usuarios = await response.json();
    const usuariosContainer = document.getElementById('usuarios');
    usuariosContainer.innerHTML = "";
    usuarios.forEach(usuario => {
        usuariosContainer.innerHTML+= 
        `
                    <tr>
                        <th scope="row">${usuario.nombres}</th>
                        <td>${usuario.email}</td>
                        <td>${usuario.clave}</td>
                        <td>${usuario.tipoUsuario}</td>
                        <td>${usuario.area}</td>
                        <td>${usuario.estado}</td>
                        <td><button onclick="updateUsuario('${usuario._id}')">Actualizar</td>
                        <td><button onclick="deleteUsuario('${usuario._id}')">Eliminar</td>
                    </tr>
        `;
    });
}

//funcion para agregar usuarios
async function addUsuario() {
    console.log('Registrar Usuario');
    const nombres = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const clave = document.getElementById('clave').value;
    const tipoUsuario = 1;
    const area = 1;
    const estado = 101;
    console.log('Crear Usuario ', nombres,email,clave,tipoUsuario,area,estado);
    console.log(JSON.stringify({ nombres, email, clave, tipoUsuario, area, estado }));
    await fetch(apiURL,{
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({ nombres, email, clave, tipoUsuario, area, estado })
    })
    alert("Usuario Creado Correctamente");
    location.href="http://localhost:773/html/home.html";
}

//funcion para actualizar usuarios
async function updateUsuario(id) {
    console.log('actualiza Usuario ', id);
    const nombres = prompt("Nuevo nombre:");
    const email = prompt("Nueva correo:");
    const clave = prompt("Nueva clave:");
    const tipousuario = prompt("Nuevo tipo de usuario:");
    const area = prompt("Nueva area:");
    const estado = prompt("Nuevo estado:");
    console.log('Datos nuevos ', nombres,email,clave,tipousuario,area,estado);
    console.log(JSON.stringify({ nombres, email, clave, tipousuario, area, estado }));
    await fetch(`${apiURL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombres, email, clave, tipousuario, area, estado })
    })
    getUsuarios();
}

//funcion para elminar usuarios
async function deleteUsuario(id) {
    console.log('Registra Usuario ', id);
    await fetch(`${apiURL}/${id}`, {
        method: 'DELETE'
    })
    getUsuarios();
}

//funcion para agregar areas
async function addArea() {
    console.log('Registrar Usuario');
    const codigo = document.getElementById('codigo').value;
    const nombrea = document.getElementById('nombrea').value;
    const estado = 101;
    console.log('Crear Area ', codigo,nombrea,estado);
    console.log(JSON.stringify({ codigo,nombrea,estado }));
    await fetch(`${apiURL}/a`,{
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({ codigo,nombrea,estado })
    })
    alert("Area Creada Correctamente");
    location.href="http://localhost:773/html/areas.html";
}

//funcion para obtener todas las areas
async function getAreas(){
    console.log('Cargar Areas');
    const response =await fetch(`${apiURL}/a`);
    const areas = await response.json();
    const areasContainer = document.getElementById('areas');
    areasContainer.innerHTML = "";
    areas.forEach(area => {
        areasContainer.innerHTML+= 
        `
                    <tr>
                        <th scope="row">${area.codigo}</th>
                        <td>${area.nombrea}</td>
                        <td>${area.estado}</td>
                        <td><button onclick="updateArea('${area._id}')">Actualizar</td>
                        <td><button onclick="deleteArea('${area._id}')">Eliminar</td>
                    </tr>
        `;
    });
}

//funcion para actualizar areas
async function updateArea(id) {
    console.log('actualiza area ', id);
    const codigo = prompt("Nuevo codigo:");
    const nombrea = prompt("Nuevo nombre:"); 
    const estado = prompt("Nuevo estado:");
    console.log('Datos nuevos ', codigo,nombrea,estado );
    console.log(JSON.stringify({ codigo,nombrea,estado }));
    await fetch(`${apiURL}/a/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ codigo,nombrea,estado })
    })
    getAreas();
}

//funcion para elminar areas
async function deleteArea(id) {
    console.log('Registra Usuario ', id);
    await fetch(`${apiURL}/a/${id}`, {
        method: 'DELETE'
    })
    getAreas();
}

//funcion para agregar estados
async function addEstado() {
    console.log('Registrar Usuario');
    const codigo = document.getElementById('codigo').value;
    const nombree = document.getElementById('nombree').value;
    console.log('Crear Estado ', codigo,nombree);
    console.log(JSON.stringify({ codigo,nombree }));
    await fetch(`${apiURL}/e`,{
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({ codigo,nombree })
    })
    alert("Estado Creado Correctamente");
    location.href="http://localhost:773/html/estados.html";
}

//funcion para obtener todas las estados
async function getEstados(){
    console.log('Cargar Estados');
    const response =await fetch(`${apiURL}/e`);
    const estados = await response.json();
    const estadosContainer = document.getElementById('estados');
    estadosContainer.innerHTML = "";
    estados.forEach(estado => {
        estadosContainer.innerHTML+= 
        `
                    <tr>
                        <th scope="row">${estado.codigo}</th>
                        <td>${estado.nombree}</td>
                        <td><button onclick="updateEstado('${estado._id}')">Actualizar</td>
                        <td><button onclick="deleteEstado('${estado._id}')">Eliminar</td>
                    </tr>
        `;
    });
}

//funcion para actualizar estados
async function updateEstado(id) {
    console.log('actualiza area ', id);
    const codigo = prompt("Nuevo codigo:");
    const nombree = prompt("Nuevo nombre:"); 
    console.log('Datos nuevos ', codigo,nombree );
    console.log(JSON.stringify({ codigo,nombree }));
    await fetch(`${apiURL}/e/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ codigo,nombree })
    })
    getEstados();
}

//funcion para elminar estados
async function deleteEstado(id) {
    console.log('Registra Usuario ', id);
    await fetch(`${apiURL}/e/${id}`, {
        method: 'DELETE'
    })
    getEstados();
}