/* 8.- Escribe un programa que pida un número 
y diga si es divisible por 2*/

let num = parseInt(prompt("escribe un numero"));

if (!isNaN(num)) {
    if (num % 2 == 0) {
        document.write(`El número ${num} es par`);
    } else {
        document.write(`El número ${num} no  es par`);
    }
} else {
    document.write("debes escribir un numero");
}
