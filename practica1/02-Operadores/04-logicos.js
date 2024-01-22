//AND, OR, NOT

//AND && (Amperson)

console.log(true && false);
console.log(true && true);
console.log(false && false);

let mayor= true;
let suscrito = true;

console.log("operador AND: Suscripción es: " , mayor && suscrito);

// OR || (Barras paralelas)

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log (false || false);

//Ahora si solo hubiera que cumplir una condición


console.log("operador AND: Suscripción es: ", mayor || suscrito);

// NOT !
//El operador NOT nos va a cambiar el valor de dentro
//Si el valor es true lo invertirá a false
console.log("operador not", !mayor)

//En netflix se utilizaria esto para que solo acceda al catalogo infantil
let contenidoAdulto = true;

console.log("Si es un niño el contenido adulto = ", !contenidoAdulto);