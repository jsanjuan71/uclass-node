const moment = require('moment')

const currencyLibrary = require("currency-library")

const request = require('request')

const fs = require('fs')

const csv = require('csvtojson')

// Importamos el módulo aritmeticas
const aritmeticas = require('./aritmeticas'); 

// Importamos el componente textToWordArray del módulo procesadorTextos
const {textToWordArray} = require('./procesadorTextos.js');


const palabras = textToWordArray("Hola mundo desde º")

const resultadoSuma = aritmeticas.suma(1,2)

console.log("Resultado de la suma: ", resultadoSuma)

aritmeticas.resta(1,2)

aritmeticas.toDollars(34)

console.log("Ejecutando desde nodejs pero en app.js")

const ahora = new Date()

console.log("Fecha y hora actual: ", ahora)

moment.locale('es')
console.log("Fecha y hora actual moment: ", moment().format('LLLL'))
console.log("Fecha y hora actual moment: ", moment().format('dddd D [de] MMMM [del] YYYY [a las] HH:mm:ss'))


const allCurrencies = currencyLibrary.getAll()

const usdCurrency = allCurrencies.filter( (currency) => currency.isoCode === 'EUR' )

const currency = currencyLibrary.getByNumericCode( usdCurrency[0].numericCode )

console.log( "usdCurrency", usdCurrency )
console.log( `${currency.symbol} 500 ${currency.isoCode}`  )

const link = fs.readFileSync('./api-gasolineras.txt', 'utf8').trim()

console.log("link", link)

request(link, function (error, response, body) {
    const json = JSON.parse(body)
    console.log("GASOLINERAS", json)
})

const csvFilePath='./menuPizzas.csv'

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log( "PIZZAS", jsonObj);
    
})







