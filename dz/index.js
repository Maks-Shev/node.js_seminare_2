const gP = require('max_generate_pass');

const password = gP.generatePassword(8, { hasLowercase: true, hasUppercase: true, hasNumber: true, hasSymbol: false });


console.log(password.toString());