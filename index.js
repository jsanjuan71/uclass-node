const fs = require('fs')

async function generateRandomNumberAfter2Secs(max) {
    // Do something with data

    return new Promise( (resolve, reject) => {
        if(isNaN(max)) {
            reject("El dato debe ser un numero entero positivo")
        }
        if( max < 2) {
            reject("El numero debe ser mayor a 2")
        }

        const resultOne = Math.floor(Math.random() * max) + 1;
        setTimeout( resolve, 1000, resultOne )
    })
}

async function readLine(lineNumber, file) {
    return new Promise( (resolve, reject) => {
        fs.readFile( file, 'utf8', (error, data) => {
            if (error) {
                reject( error )
            }

            const nombres = data.split('\n')
            resolve( nombres[lineNumber] )
            
        })
    } )
}

/**
 * 1 - Leer y cargar los generos musicales desde el archivo generos.txt
 * 2 - Generar un numero al azar entre 1 y la cantidad de generos musicales 
 * 3 - Obtener el genero musical de la posicion obtenida en el paso 2
 * 4 - Imprimir el genero musical obtenido
 */

async function generos() {
    return new Promise( (resolve, reject) => {
        const data = fs.readFileSync("generos.txt", "utf-8")
        if(!data || data.length === 0) reject("No se pudo leer el archivo")

        const generos = data.split('\n')
        if(!generos || generos.length === 0) reject("El archivo no contine generos musicales" )
        
        const numeroAzar = Math.floor(Math.random() * generos.length)
        const genero = generos[numeroAzar]
        resolve(genero)
    } )
}



generateRandomNumberAfter2Secs(100)
    //setTimeout( resolve, 2000, resultOne )
    .then( (resultOne) => {
        console.log("Resultado de la promesa: ", resultOne)

        readLine(resultOne, 'nombres.txt')
            .then( (name) => {
                console.log("Nombre: ", name)
            } )
            .catch( (reason) => {
                console.error("Error en la promesa de readline: ", reason)
            } )
    } )
    //reject("El numero debe ser mayor a 2")
    .catch( (reason) => {
        console.error("Error en la promesa: ", reason)
    } )
    .finally( () => {
        console.log("Final del proceso")
    })

/*
console.log("Buscando nombre al azar")
const result = await generateRandomNumberAfter2Secs(70)
console.log("Resultado de la promesa: ", result)
const nombre = await readLine(result, 'nombres.txt')
console.log("Nombre: ", nombre)

console.log("Buscando genero musical al azar")
*/


generateRandomNumberAfter2Secs(70)
    .then( async(resultOne) => {
        const name = await readLine(resultOne, 'generos.txt')
        console.log("Nombre: ", name)

    })
    .catch( (reason) => {

    })

console.log("Buscando genero musical al azar")

generos()
    .then( (genero) => {    
        console.log("Genero: ", genero)
    })   
    .catch( (reason) => {
        console.error("Error al buscar el genero: ", reason)
    })
