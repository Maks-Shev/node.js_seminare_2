const numberPrecision = require('number-precision')

const  calcResult = (purchases, discount) => {
    let total = purchases.reduce((acc, purchases) => numberPrecision.plus( acc, purchases), 0);
    total = numberPrecision.times(total, discount);
    return total;
}

module.exports = calcResult;