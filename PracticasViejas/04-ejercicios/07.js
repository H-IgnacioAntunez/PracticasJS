/**
 * Crear algoritmo que devuelva
 * el precio del producto
 * más impuesto.
 * 
 */

function precioCompleto(precio,impuesto){
    preciototal = precio + precio * impuesto;
    return preciototal;
}

let resultado = precioCompleto(19.90,0.15);
console.log(resultado);