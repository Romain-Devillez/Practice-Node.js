const validator = require('validator')
const getNotes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');

// Customive yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note !')

    }
})

// Create remove command
yargs.command({
    command:  'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing a note !')

    }
})

// Create list command
yargs.command({
    command:  'list',
    describe: 'list your notes',
    handler: function () {
        console.log('Placeholder')

    }
})

// Create read command
yargs.command({
    command:  'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Placeholder')

    }
})

console.log((yargs.argv))
