let accion = 'guardar';

//Hay que poner break si o si en cada caso
switch(accion){
    case 'listar':
        console.log('Accion de listar');
        break;
        
    case 'guardar':
        console.log('Acción de guardar');
        break;
    default:
        console.log('Accion ninguna');
}