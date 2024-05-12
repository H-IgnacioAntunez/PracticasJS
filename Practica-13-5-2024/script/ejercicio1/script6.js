/**
 * Este ejercicio pide ingresar un número del 1 al 7 por teclado y luego imprimir el día de la semana correspondiente.
 */

let diaIngresado = parseInt(prompt("Ingresa un número del 1 al 7"));

while(diaIngresado >7){
    diaIngresado = parseInt(prompt("Ingreso un nùmero mayor a 7. Porfavor intente nuevamente"));
}

switch(diaIngresado){
    case 1:
        alert("Hoy es lunes")
        break;
    case 2:
        alert("Hoy es martes");
        break;
    case 3:
        alert("Hoy es miercoles");
        break;
    case 4:
        alert("Feliz jueves");
        break;
    case 5:
        alert("Hoy es viernes");
        break;
    case 6:
        alert("Hoy es sabado");
        break;
    case 7:
        alert("Hoy es domingo");
        break;
}
    
