const numberPrecision = require('number-precision')

const  calcResult = (purchases, discount) => {
    let total = purchases.reduce((acc, purchases) => numberPrecision.plus( acc, purchases), 0);
    total = numberPrecision.times(total, discount);
    return total;
}
    


const   total = calcResult([12.1, 32.2, 43.1], 0.9);
console.log('Общая стоимость покупок: ' + total + ' рублей');
