// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const nombre = prompt('Cual es tu nombre?');

if (nombre === 'Nicolas') {
    console.log('Hola, Tocayo! Yo tambien me llamo ' + nombre);
}else if (nombre === 'Cristiana') {
    console.log('Hola, ' + nombre + ' te llamás igual que mi Madre!  ');
}else {
    console.log('Hola ' + nombre);
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

function calcularDiferenciaEdad(miEdad, edad) {
    return miEdad - edad;
}

const miEdad = 30;
const edad = prompt('Cual es tu edad?');

if (calcularDiferenciaEdad(miEdad, edad) > 0) {
    console.log('Tienes ' + calcularDiferenciaEdad(miEdad, edad) + ' anos mas que yo');
}else if (calcularDiferenciaEdad(miEdad, edad) < 0) {
    console.log('Tienes ' + calcularDiferenciaEdad(miEdad, edad) + ' anos menos que yo');
}else {
    console.log('Tienes la misma edad que yo');
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

let tieneDocumento = prompt('Tienes documento?');
let respuestaDocumento = tieneDocumento.toLowerCase();

if (respuestaDocumento === 'si') {
    let edad = prompt('Cual es tu edad?');
    if (edad > 18) {
        console.log('Puedes entrar al bar');
    }else {
        console.log('No puedes entrar al bar');
    }
}else if (respuestaDocumento === 'no') {
    console.log('No puedes entrar al bar');
}else {
    console.log('No entendemos la respuesta');
}