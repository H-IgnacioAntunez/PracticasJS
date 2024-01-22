let user = {
    id:1,
    name:"Pedro",
    age: 22,
};

for(let prop in user){
    console.log(prop , user[prop]);
}

//Tambien podemos recorrer un array con for in

let animales = ["Chancho","Perro","Gato"]
for(index in animales){
    console.log("El animal " + index + " es " + animales[index]);
}