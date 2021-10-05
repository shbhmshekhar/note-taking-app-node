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


//console.log(process.argv)
console.log(yargs.argv['title'])