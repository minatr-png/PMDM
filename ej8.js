//Para este ejercicio he instalado readline-sync
input = require('readline-sync');

let num = 0;

while (num <= 0 || num > 12)
{
    num = input.question('Dime un numero (del 1  al 12): ');

    if (num <= 0 || num > 12) console.log("\nDebes introducir un número entre el 1 y el 12.\n");
}

let res = Math.trunc(Math.random() * 12 + 1);

if (res == num) console.log("Enhorabuena has acertado, el número era el",res+".");
else console.log("Lo sentimos has fallado, el número era el",res+".");