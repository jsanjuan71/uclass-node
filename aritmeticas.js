
const IVA = 16

const DOLAR = 17

const suma = (a, b) => a + b

const resta = (a, b) => {
    return a - b
}

const toDollars = (pesos) => { return pesos / DOLAR }


module.exports = {suma, resta, toDollars}