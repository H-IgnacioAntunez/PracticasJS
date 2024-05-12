/*
Una tienda aplica un descuento del 10% si se compran 3 o más artículos.
Este ejercicio pide ingresar la cantidad de artículos comprados por teclado y luego calcular el total a pagar con el descuento aplicado.
*/

let cantidadArticulos = parseInt(prompt("Cuantos articulos lleva?"));
let precioArticulos = 30;
let total = cantidadArticulos * precioArticulos;

if(cantidadArticulos>=3){
    total *= 0.9; // Aplicar descuento del 10%
    alert(`El total a pagar es de ${total} con descuento aplicado`);
}
else{
    alert(`El total a pagar sin descuento es de ${total}`);
}