// function Persona(nombre,edad,estatura,color){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.estatura = estatura;
//     this.color = color;

//     //Coleccion de datos representados en un par de informacion (llave:valor)
//     this.moverse = function(nombre){
//         this.nombre = nombre
//     console.log(nombre+"Se movio");
//     }
//     this.expresarse = function(){
//     console.log("Se expreso");
//     }
// }

// var personaUno = new Persona("laura",19,1.55,"blanco")
// var personaDos = new Persona("daniel",19,1.80,"blanco")
// var personaTres = new Persona("Anyi",20,1.70,"blanco")
// personaUno.moverse()
// personaUno.expresarse()
// personaDos.moverse()
// console.log(personaUno,personaDos,personaTres)

// var formularioLogin = document.getElementById("form-login");
// var formularioLogin = document.querySelector("#form-login");
// console.log(formularioLogin);


import { expresionesRegulares } from "../../../helpers/expresiones";

document
    .getElementById("btnFormRegister")
    .addEventListener("click", function () {
        document.getElementById("form-login").style.display = "flex";
        document.getElementById("form-register").style.display = "none";
    });
document.getElementById("btnFormLogin").addEventListener("click", function () {
    document.getElementById("form-login").style.display = "none";
    document.getElementById("form-register").style.display = "flex";
});

let inputs = document.getElementsByTagName("input");
for (let index = 0; index < inputs.length; index++) {
    inputs[index].addEventListener("keyup", validarFormulario);
}

function validarFormulario(e) {
    // console.log(e.target.name);
    switch (e.target.name) {
        case "register-nombre":
            console.log("Este es el input de register usuario ");
            break;
        default:
            break;
    }
}

// console.log(input);

// let arreglo = [1, "", true, function(){}, {nombre:"yere"}, [] ]
// console.log(arreglo[4]);
