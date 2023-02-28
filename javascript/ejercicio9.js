/* 9.- Escribe un programa que pida una frase y escriba las vocales que 
aparecen
*/

let frase = prompt("escribe una frase");
let vocales = frase.replace(/[aeiou]/gi, "").length;
let vocalesEncontradas = frase.match(/[aeiou]/gi);
document.write(`
   tu frase tiene ${vocales}
   vocales , y son ${vocalesEncontradas}
`);
