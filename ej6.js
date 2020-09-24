//Para este ejercicio he instalado readline-sync
input = require('readline-sync');

let num = input.question('Dime un numero: ');

if (num%2 == 0) console.log("El número es par.");
else console.log("El número es impar.");