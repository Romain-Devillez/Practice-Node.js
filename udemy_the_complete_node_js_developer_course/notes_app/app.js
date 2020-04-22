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
    builder :
        {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Add your notes',
                demandOption: true,
                type: 'string'
            }
        },
    handler: function () {
        console.log('Title: ' + argv.title + 'Description :' + argv.description)

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
    describe: 'List your notes',
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

console.log(yargs.argv)