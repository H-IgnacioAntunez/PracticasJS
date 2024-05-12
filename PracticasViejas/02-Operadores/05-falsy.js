//Short circuit
//False

//false
//0
//"" strings vacios
//null
//undefined
//NaN

//Todos estos valores son FALSYS

let nombre ="";
let username = nombre || "Anonimo";
console.log(username);

//Esto nos permite ejecutar funciones siempre
//que la primera haya evaluado en true

function fn1(){
    console.log("soy funcion 1");
    //Cambiar valor para ver mejor de true a false
    return false;

}

function fn2(){
    console.log("soy funcion 2 ");
    return true;
}

let x = fn1() && fn2();