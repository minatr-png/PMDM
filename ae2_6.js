//Función notBanned
function notBanned(users, blackListed) { return users.filter(x => !blackListed.some( y => y == x)); } //Coje cada valor de users y mira si coincide con alguno de los valores de blacklisted

//Comprobación
const user = ["Ana", "Javi", "Roberto",  "Vanessa"];

const ban = ["Ana", "Roberto"];

console.log(notBanned(user, ban));