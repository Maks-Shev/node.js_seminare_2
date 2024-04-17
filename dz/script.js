function generatePassword(length = 8, option = {hasNumber: true, hasLowercase: true, hasUppercase: true, hasSymbol: false}) {
    const numbeers = '0123456789';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!@#$%^&*()-_=+[{]}\\|;:,<.>/?';

    let validChars = '';

    if (option.hasNumber) {
        validChars += numbeers;
    }
    if (option.hasLowercase) {
        validChars += lowerCase;
    }
    if (option.hasUppercase) {
        validChars += upperCase;
    }
    if (option.hasSymbol) {
        validChars += symbols;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars.charAt(randomIndex);
    }
    return password;
}

const password = generatePassword(8, { hasLowercase: true, hasUppercase: true, hasNumber: true, hasSymbol: false });
console.log(password);

module.exports = { generatePassword };