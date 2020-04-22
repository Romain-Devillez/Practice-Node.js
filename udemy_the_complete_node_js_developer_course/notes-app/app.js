const validator = require('validator')

const getNotes = require('./notes');

const msg = getNotes();

console.log(msg);

console.log(validator.isEmail('andrew@exemple.com'));
console.log(validator.isURL('https://mead.io'));
