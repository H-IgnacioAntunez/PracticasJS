function suma(a,b){
    console.log(arguments);
	return a + b;
}

let resultado = suma(5,7);
console.log(resultado);

suma(1,2,3,4,5,6,7,8)