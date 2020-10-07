//Función de la parte A
function strings(x) { return typeof x == "string"; }

//Función de la parte B
function odd(x) { return x%2 != 0 && !strings(x); }

//Array
const values = ["Ana", 2, "Javi", 5, "Roberto", 7, "Vanessa", 10];

//Comprobaciones
console.log(values.filter(strings));
console.log(values.filter(odd));