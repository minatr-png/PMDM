//Función findGreaterThan
function findGreaterThan(x, values) { return values.every(y => y > x); }

//Comprobación
const numbers = [23, 6, 3, 4, 5];
const number  = 2;

console.log(findGreaterThan(number, numbers));