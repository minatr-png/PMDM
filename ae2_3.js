//Función findMinimum
function findMinimum(values) { return values.reduce(giveMinimum); }

//Encuentra el número más pequeño entre los dos que se le proporcionan
function giveMinimum(a, b)
{
    if (a < b) return a;
    else return b;
}

//Comprobación
const numbers = [23, 2, 3, 4, 5];

console.log(findMinimum(numbers));