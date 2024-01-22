let f = 0;
//En el caso del do while primero se ejecuta y luego evalua la condición
do{
    if(f%2==0){
        console.log(f + " : Es un número par");
    }
    else{
        console.log(f + " : Es un número impar");
    }
    f++;
} while(f<10)