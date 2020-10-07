//Función multipleFactorial
function multipleFactorial(values) { return values.map(factorial); }

//Calcula el factorial de un número
function factorial(x)
{
    let fact = 1;
    
    for (let i = 1; i <= x; i++) fact *= i;

    return fact;
}

//Comprobación
const numbers = [23, 6, 3, 4, 5];

console.log(multipleFactorial(numbers));
