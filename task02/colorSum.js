const calcResult = require('./calcSum.js');
require('colors');

const total = calcResult([12.1, 32.2, 43.1], 0.9);

const resutText = `Итоговая сумма ${total}`

console.log(total > 50 ? resutText.red : resutText.green);