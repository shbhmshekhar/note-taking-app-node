const chalk = require('chalk');
const yargs = require('yargs');

const command = process.argv[2];

if(command === 'add'){
    console.log('adding notes');
}else if(command === 'remove'){
    console.log('Removing Note');
}

//Customize yargs version
yargs.version('1.1.0');

//Create add command

yargs.command({
    command: 'add',
    describe: 'add a new note',
    handler: function(){
        console.log('adding a new note')
    }
})

//console.log(process.argv)
console.log(yargs.argv['title'])