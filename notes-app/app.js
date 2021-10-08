const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes');

const command = process.argv[2];

// if(command === 'add'){
//     console.log('adding notes');
// }else if(command === 'remove'){
//     console.log('Removing Note');
// }

//Customize yargs version
yargs.version('1.1.0');

//Create add command

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder:{
        title: {
            describe:'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
        // console.log('Title: ', argv.title);
        // console.log('Body: ', argv.body);
    }
})

//Create REMOVE command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: 'Note title to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
        // console.log(argv.title);
        // console.log('Remove Note');
    }
});

//Create LIST command
yargs.command({
    command:'listNotes',
    describe: 'List all notes',
    handler(){
        notes.listNotes();
        //console.log('List all notes');
    }
});

//Create READ command
yargs.command({
    command:'read',
    describe:'Read notes',
    handler() {
        console.log('Reading Notes');
    }
});

yargs.parse();
//console.log(process.argv)
//console.log(yargs.argv)