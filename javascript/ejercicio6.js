/*6.- Escribe un programa que pida dos números y 
escriba en la pantalla cual es el mayor.*/

let num1 = parseInt(prompt("escribe un numero"));
let num2 = parseInt(prompt("escribe  otro numero"));

if (!isNaN(num1) && !isNaN(num2)) {
    document.write(Math.max(num1, num2));
} else {
    document.write("debes escribir un numero");
}
