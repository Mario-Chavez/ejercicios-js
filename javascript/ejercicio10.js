/* 10.- Escribe un programa que pida un número y nos diga 
si es divisible por 2, 3, 5 o 7 
(sólo hay que comprobar si lo  es por uno de los cuatro)
*/
let num = parseInt(prompt("escribe un numero"));

if (!isNaN(num)) {
    if (num % 2 == 0) {
        document.write(`El número ${num} es divisible por 2`);
    } else if (num % 3 == 0) {
        document.write(`El número ${num} es divisible por 3`);
    } else if (num % 5 == 0) {
        document.write(`El número ${num} es divisible por 5`);
    } else if (num % 7 == 0) {
        document.write(`El número ${num} es divisible por 7`);
    }
} else {
    document.write("debes escribir un numero");
}
