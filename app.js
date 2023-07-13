const moment = require('moment'); // Importamos el módulo moment

const fs = require('fs'); // Importamos el módulo fs

// Importamos el módulo aritmeticas
const aritmeticas = require('./aritmeticas.js'); 

// Importamos el componente textToWordArray del módulo procesadorTextos
const {textToWordArray} = require('./procesadorTextos.js');
const { time } = require('console');


const palabras = textToWordArray("Hola mundo desde º")

const resultadoSuma = aritmeticas.suma(1,2)

console.log("Resultado de la suma: ", resultadoSuma)

aritmeticas.resta(1,2)

aritmeticas.toDollars(34)

console.log("Ejecutando desde nodejs pero en app.js")

moment.locale('es');

console.log( new Date() );


console.log( moment().format('dddd, D [de] MMMM [del] YYYY, h:mm a') );

function handleFileRead(err, data) {
    if (err) {
        console.error("ERROR AL LEER EL ARCHIVO", err);
        return;
    }
    const nombres = data.split('\n');

    nombres.map( (nombre) => {
        console.log(`Hola ${nombre}`);
    })
}

fs.readFile( 'nombres.txt', 'utf8', handleFileRead )

console.log("Antes del timeout")

setTimeout( function() {
    console.log("Dentro del timeout")
}, 5 * 1000 )

console.log("Después del timeout")

/*setInterval( function() {
    console.log("Dentro del interval")
}, 2 * 1000 ) */


function timeoutCallback( nombre, apellido ) {
   console.log(`Hola soy  ${nombre} ${apellido}`)
}

//timeoutCallback("Juan", "Sanjuan") 

setTimeout( timeoutCallback, 4 * 1000, "Juan", "Sanjuan" )

/*
function 
behavior
- definition  -> function    
- variable    -> name
- executable  -> parenthesis
*/

//call - invoke - ejecutar - llamar

function clickCallback(event) {

}

//document.addEventListener('click', clickCallback)


function mostrarHora(fecha) {
    console.clear()
    console.log( moment().format('dddd, D [de] MMMM [del] YYYY, h:mm:ss a') );
}

setInterval( mostrarHora, 1000, new Date().getTime() )

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

fruits.forEach(function (index, value) {
    console.log(index) 
});



function saludar( nombre, callbackFn  ) {
    console.log("convitiendo tu nombre a mayusculas, espere un momento por favor")
    var mayus = nombre.toUpperCase()
    setTimeout( callbackFn, 5 * 1000, mayus ) // Invoca a la funcion callbackFn despues de 5 segundos
    //callbackFn( mayus )

}

function callback( uppercasedName ) {

    console.log(`Hola ${uppercasedName}`)

}

/* invocar con funcion estandar (con definicion por nombre)*/
saludar("Julio", callback)


/* invocar con funcion anonima (sin definicion por nombre)*/
saludar("Julio", function ( uppercasedName ) {

    console.log(`Hola ${uppercasedName}`)

})

/* invocar con funcion flecha (sin definicion por nombre ni con palabra function)*/
saludar("Julio",  uppercasedName => console.log(`Hola ${uppercasedName}`) )




function pedirUber( origen, destino, viajeAceptado, viajeCancelado  ) {
    solicitarViaje( origen, destino )
    viajeAceptado(234, "JKL234", 10 )
}



// CALLBACK HELL

function stepOne(max, callback) {
    // Do something with data
    const resultOne = Math.floor(Math.random() * max) + 1;
    setTimeout( callback, 2000, null, resultOne )
}

function sortList( list, callback ) {
    setTimeout( callback, 3000, null, list.sort() )
}
  
  function stepTwo(lineNumber, callback) {
    // Do something with resultOne
    fs.readFile( 'nombres.txt', 'utf8', (error, data) => {
        if (error) {
            console.error("ERROR AL LEER EL ARCHIVO", error);
            callback(error, null)
            return;
        }
        const nombres = data.split('\n');

        sortList(nombres,  function(sortedList) {

            callback( null, sortedList[lineNumber] )
        })
        
    } )
  }
  
  function stepThree(name, callback) {
    // Do something with resultTwo
    const resultThree = name.toUpperCase()
    callback(null, resultThree);
  }
  
  function stepFour(name, callback) {
    // Do something with resultThree
    const finalResult = `Hola me llamo ${name} y estoy participando en el bootcamp de Fullstack`
    callback(null, finalResult);
  }
  
  stepOne(50, function(err, resultOne) {
    if (err) {
      console.error(err);
      return;
    }
  
    stepTwo(resultOne, function(err, resultTwo) {
      if (err) {
        console.error(err);
        return;
      }
  
      stepThree(resultTwo, function(err, resultThree) {
        if (err) {
          console.error(err);
          return;
        }
  
        stepFour(resultThree, function(err, finalResult) {
          if (err) {
            console.error(err);
            return;
          }
  
          console.log(finalResult);
        });
      });
    });
  });

// PROMISES 