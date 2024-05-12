/**
 * Un triángulo se clasifica como rectángulo, isósceles o equilátero en base a la longitud de sus lados.
 * Este ejercicio pide ingresar la longitud de los tres lados del triángulo por teclado y luego determinar su clasificación.
 */

let lado1= parseInt(prompt("Ingrese el largo del lado 1"));
let lado2= parseInt(prompt("Ingrese el largo del lado 2"));
let lado3= parseInt(prompt("Ingrese el largo del lado 3"));

if(lado1 == lado2 && lado1==lado3){
    alert("Este es un triangulo equilatero")
}
else if(lado1 == lado2 || lado1 == lado3 || lado2 ==lado3){
    alert("Es un triangulo isosceles");
}
else{
    alert("Es un triangulo rectangulo");
}
