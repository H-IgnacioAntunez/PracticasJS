/**
 * Un alumno aprueba una materia si obtiene una calificación final mayor o igual a 60. 
 * Este ejercicio pide ingresar la calificación final del alumno por teclado y luego determinar si aprueba o no.
 */

let notaAlumno = parseInt(prompt("Ingresar la nota del alumno."));

if(notaAlumno>=60){
    alert("El alumno esta aprobado");
}
else{
    alert("El alumno está desaprobado");
}