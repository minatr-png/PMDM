//Para este ejercicio he instalado readline-sync
input = require('readline-sync');

let num = input.question('Dime un numero: ');

console.log(Math.abs(num));