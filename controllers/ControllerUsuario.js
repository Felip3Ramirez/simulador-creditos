import { usuarios } from "../models/ModelUsuario.js";

export function login() {
    var loginUsuario = document.getElementById("login-usuario").value;
    var loginContraseña = document.getElementById("login-contrasena").value;
    console.log(usuarios);
    usuarios.some(function(index){
        if (loginUsuario==index.usuario && loginContraseña==index.contrasena) {
            window.location.href = "/views/pages/ViewCredito.html"
        }
    });
    
}

export function register() {
    let registroNombre = document.getElementById("register-nombre").value;
    let registroUsuario = document.getElementById("register-usuario").value;
    let registroCorreo = document.getElementById("register-correo").value;
    let registroContraseña = document.getElementById("register-contrasena").value;
    let registroConfirmar = document.getElementById("register-confirmar").value;
    let newRegistro = {
        nombre: registroNombre,
        usuario: registroUsuario,
        correo:  registroCorreo,
        contrasena: registroContraseña,
        confirmar: registroConfirmar
    };
    // usuarios.push(newRegistro);
    usuarios.unshift(newRegistro);
    document.getElementById("form-register").style.display="none"
    document.getElementById("form-login").style.display= "flex"
    // console.log(newRegistro);
    console.log(usuarios);
    
    
    
}
