
// Importamos el módulo aritmeticas
const aritmeticas = require('./aritmeticas.js'); 

// Importamos el componente textToWordArray del módulo procesadorTextos
const {textToWordArray} = require('./procesadorTextos.js');


const palabras = textToWordArray("Hola mundo desde º")

const resultadoSuma = aritmeticas.suma(1,2)

console.log("Resultado de la suma: ", resultadoSuma)

aritmeticas.resta(1,2)

aritmeticas.toDollars(34)

console.log("Ejecutando desde nodejs pero en app.js")
