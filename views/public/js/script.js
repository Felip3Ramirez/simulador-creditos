function Persona(nombre,edad,estatura,color){
    this.nombre = nombre;
    this.edad = edad;
    this.estatura = estatura;
    this.color = color;

    //Coleccion de datos representados en un par de informacion (llave:valor)
    this.moverse = function(nombre){
        this.nombre = nombre
    console.log(nombre+"Se movio");
    }
    this.expresarse = function(){
    console.log("Se expreso");
    }
}



var personaUno = new Persona("laura",19,1.55,"blanco")
var personaDos = new Persona("daniel",19,1.80,"blanco")
var personaTres = new Persona("Anyi",20,1.70,"blanco")
personaUno.moverse()
personaUno.expresarse()
personaDos.moverse()
console.log(personaUno,personaDos,personaTres)



