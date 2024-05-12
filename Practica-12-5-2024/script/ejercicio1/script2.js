/**
 * Un año es bisiesto si es divisible por 4, pero no por 100, a menos que también sea divisible por 400. 
 * Este ejercicio pide ingresar un año por teclado y luego determinar si es bisiesto o no.
 */

let año = parseInt(prompt("Ingresar año"));
if((año%4==0 && año%100!=0)|| año % 400 === 0){
    alert("Es un año bisiesto")
}
else{
    alert("No es un año bisiesto");
}