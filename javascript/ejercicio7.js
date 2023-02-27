/*7.- Escribe un programa que pida 3 números y escriba en 
la pantalla el mayor de los tres.*/

let num1 = parseInt(prompt("escribe un numero"));
let num2 = parseInt(prompt("escribe  otro numero"));
let num3 = parseInt(prompt("escribe  otro numero"));

if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    document.write(` el numero mayor es ${Math.max(num1, num2, num3)} `);
} else {
    document.write("debes escribir un numero");
}
