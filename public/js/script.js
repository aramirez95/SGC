// script.js
const apiURL = 'http://localhost:773/api/usuarios'

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