//Break permite salir de un loop y continue saltar una iteracion
let i = 0;
while(i<6){
    i++;
    
    if(i===2){
        continue;
    }
    //Entonces cuando haya continue se saltara todo el resto 
    //del loop
    console.log(i);

    if(i===4){
        console.log("BREAK LOOP");
        //Finaliza el bucle
        break;
    }
}

//Mini prueba

for(f=0;f<=30;f++){
    if(f%2==0){
        console.log(f);
    }
    else{
        continue;
    }
    if(f==22){
        break;
    }
}