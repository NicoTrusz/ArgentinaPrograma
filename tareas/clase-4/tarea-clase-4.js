// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.
console.log("tarea 1 multiplos de 3");
for(let n =3; n <= 22; n++ ){
    if (n % 3 === 0){
        console.log(n);
    }
}

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.
console.log("tarea 10 a 0");
let decreciente = 10 ;
while (decreciente >= 1){
    console.log(decreciente);
    decreciente -= 1;
}

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.
console.log("Tarea 3");
for(let m = 1; m <= 50; m++){
    if (m % 3 === 0 && m % 5 === 0 ){
        console.log('FizzBuzz');
    } else if (m % 3 === 0){
        console.log('Fizz');
    } else if (m % 5 === 0){
        console.log('Buzz');
    } else {
        console.log(m);
    }
}
// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])
console.log("tarea 4")
function calcularPromedio (numeros){
    let suma = 0;
    let i = 0;

    while(i< numeros.length){
        suma += numeros[i];
        i++;
    }
    return suma / numeros.length;
}
console.log(calcularPromedio([10,5,4,2,8]));