/* 11.- Añadir al ejercicio anterior que nos diga por cuál de 
los cuatro es divisible (hay que decir todos por los que es divisible)
*/
let num = parseInt(prompt("escribe un numero"));
let divisores = "";
if (!isNaN(num)) {
    if (num % 2 == 0) {
        divisores += "2 ";
    }
    if (num % 3 == 0) {
        divisores += "3 ";
    }
    if (num % 5 == 0) {
        divisores += "5  ";
    }
    if (num % 7 == 0) {
        divisores += "7 ";
    }
    if (divisores !== "") {
        document.write(`${num} es divisible por ${divisores}`);
    } else {
        document.write(`El número ${num} no es divisible ni po 2,3,5,7`);
    }
} else {
    document.write("debes escribir un numero");
}
