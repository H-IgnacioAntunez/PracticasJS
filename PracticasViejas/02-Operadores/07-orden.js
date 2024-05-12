//Si se escribe así dará un error debido a los parentesis
//let resultado = 8/2(2+2);
//Esta es la forma correcta de escribirlo
let resultado1= 8/2*(2+2);
console.log(resultado1);

/*
    Pero si queremos cambiar el resultado, es decir
    cambiando el orden de operaciones, se hace con
    parentesis.
*/

let resultado2= 8/(2*(2+2));
console.log(resultado2);