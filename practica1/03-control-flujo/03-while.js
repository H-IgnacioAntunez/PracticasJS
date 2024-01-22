//Cuales son los numeros pares

let i =0;
/*
    Entonces lo que hará el loop es dar la vuelta cada vez
    que i sea menor a 10. Y por cada una imprimirá su valor
    y aumentará en uno. Una vez finalizado va a imprimir
    que salio del bucle.
*/
while(i<10){
    console.log(i);
    i++;
}

console.log("Fin del bucle");

/*
    Hay una forma para buscar pares e impares y es usando 
    el resto de cada posicion.
*/

let f = 0;
while (f<10){
    if(f%2==0){
        console.log(f + " : Es un número par");
    }
    else{
        console.log(f + " : Es un número impar");
    }
    //IMPORTANTE COLOCAR EL AUMENTO O DECRECIMIENTO SIEMPRE FUERA DEL IF
    f++;
}