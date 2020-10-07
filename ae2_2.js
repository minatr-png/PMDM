//Función average
function average (dataArray) 
{ 
    const arLength = dataArray.length;

    if (arLength == 0) return undefined;
    else return dataArray.reduce(sum) / arLength; //ArraySumada / TamañoDelArray
} 

//Función que suma todos los valores de un array
function sum(a, b) { return a + b; }

//Comprobación
const numbers1 = [1, 2, 3, 4, 5];

console.log(average(numbers1));

const numbers2 = [];

console.log(average(numbers2));