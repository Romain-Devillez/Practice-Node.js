const validator = require('validator')

const getNotes = require('./notes');

const chalk = require('chalk');


const msg = getNotes();

console.log(msg);

console.log(chalk.blue.bold.inverse('Success'))

console.log(validator.isEmail('andrew@exemple.com'));
console.log(validator.isURL('https://mead.io'));
