//Persona
let nombre= "nacho";
let apellido = "antunez";
let edad = "21";

//Definiendo el objeto persona
let persona = {
    nombre: "Nacho",
    apellido: "Antunez",
    edad:21,
}

//Distintas maneras de mostrar el objeto persona
console.log(persona);
//Mostrar las propiedades
console.log(persona.nombre);
console.log(persona['edad']);

//Cambio de valores en las propiedades
console.log("Los nuevos datos son: ");
persona['nombre']= "Ignacio";
persona.edad=22;
console.log(persona.nombre);
console.log(persona['edad']);

//Cambiando la forma de llamar a la propiedad
let llave='edad';
persona.llave=19;

console.log("La nueva edad es: ")
console.log(persona.llave);

//Eliminando una propiedad de un objeto

delete persona.llave;
delete persona.edad;
console.log(persona);