/**
 * ingresar tres numeros y determinar el mayor.
 */

let num1 = parseInt(prompt("Ingresar número 1 "));
let num2 = parseInt(prompt("Ingresar número 2 "));
let num3 = parseInt(prompt("Ingresar número 3 "));


if(num1>num2 && num1>num3){
    alert("El mayor es el num1");
}
else if(num2>num1 && num2>num3){
    alert("El mayor es el num2");
}
else if(num3>num1 && num3>num2){
    alert("El mayor es el num3");
}
else{
    alert("Son iguales");
}