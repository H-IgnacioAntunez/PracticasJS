/*
    Calcular como realizar una iteracion.
    Si tenemos que iterar un listado de elementos por ej.
    Por lo tanto si tenemos que mostrar un listado de elementos
    lo mejor es usar for of.
*/


let animales = ["Chanchito","Dragon","Perro"];

for (let animal of animales){
    console.log(animal);

}

for(i=0;i<animales.length;i++){
    console.log("el animal numero " + (i+1) + " es: " + animales[i]);
}

let f = 0;
while (f<animales.length){
    console.log(animales[f]);
    f++;
}
