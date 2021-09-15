
// Preguntar por un alarm y  Transformar la respuesta en numero 
var edad = Number(prompt('¿Cual es tu edad?'));

// Guardar en fechaActual la fecha del dia de hoy 'July 20, 69 00:20:18' (new date() <--- la funcion) 
var fechaActual = new Date().getFullYear();

// Tomar el año de fechaActual y guardarla en añoActual *para guardar el año (getFullyear())*
// var añoActual = fechaActual.getFullYear();

// Calcular el año de nacimiento
var añoNacimiento = fechaActual - edad;

// Imprimir en la consola  el año de nacimiento
console.log('El año en el que naciste es: ' + añoNacimiento);
console.log(fechaActual);