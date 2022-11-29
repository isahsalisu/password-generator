// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
    confirm
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


//----------------------------------

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var chars = ""
    var length = window.prompt('How many characters would you like your password to contain?');
    if (length < 10 || length > 64) {
        window.alert('Pass word length must be at least 10 charactes and not more than 64');
        return;
    };


    var symbols = window.confirm('Click Okay to confirm including special characters');
    if (symbols) {
        chars = chars + '~`!@#$%^&*()_+-={}[]\|:;,./?><'
    };

    var numbers = window.confirm('Click Okay to confirm including numeric characters');
    if (numbers) {
        chars = chars + '0123456789'
    };

    var lowercase = window.confirm('Click Okay to confirm including lowercase characters');
    if (lowercase) {
        chars = chars + 'abcdefghijklmnopqrstuvwxyz'
    };

    var uppercase = window.confirm('Click Okay to confirm including uppercase characters');
    if (uppercase) {
        chars = chars + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    };


    var pass = '';

    function generatePassword() {
        for (var i = 0; i < length; i++) {
            pass += chars[Math.floor(Math.random() * chars.length)]
        };
        console.log(pass);
        return pass
    };

    console.log(pass);

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);