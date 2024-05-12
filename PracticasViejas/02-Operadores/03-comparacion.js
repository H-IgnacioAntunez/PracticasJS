let a = 10;
//Evaluando si la variable a es exactamente igual al número 10
console.log(a==10);
//Evaluando si la variable a es distinta de 10
console.log(a!=10);
//Que pasa si comparo a con el string de 10
console.log(a=="10");
//Ahora en este ultimo caso nos dirá que es true
//Esto ocurre porque la doble igualdad solo pregunta si los valores son iguales
//Para arreglar esto hay que preguntarle si también los tipos de datos son iguales
//Para esto existe la triple igualdad
console.log(a==="10");
//Si queremos preguntar si son distintos tipos de dato o valor
console.log(a!=="10");

//LO MEJOR ES USAR LOS TRIPLES Y NO LOS DOBLES.