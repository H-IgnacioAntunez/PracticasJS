function cualEsMayor(a,b){
    if(a>b){
        return("a es mayor a b. El numero a es : " + a);
    }
    else if(a==b){
        return("Ambos son iguales");
    }
    else{
        return("b es mayor a a. El numero b es : " + b);
    }
}

let mayor = cualEsMayor(10,5);

console.log(mayor);



//Solo numero
function cualEsMenor(a,b){
    if(a<b){
        return a;
    }
    else if(a==b){
        return "=";
    }
    else{
        return b;
    }
}

let menor = cualEsMenor(3,5);

console.log(menor);

//Version mas corta

function numeroMayor(a,b){
    return (a > b) ? a : b;
}

let numMay = numeroMayor(10,5);
console.log(numMay);