import { usuarios } from "../models/ModelUsuario.js";

export function login() {
    console.log(usuarios);
    usuarios.some();
    
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
