// https://currency.js.org/
import currency from 'currency.js'

// Formmating options for Currency lib
const currencyOptions = {
    separator: ',',
    precision: 2
}

export default ({ app }, inject) => {
    // Injects $money() function into Nuxt
    inject('money', val => currency(val, currencyOptions).format())
}