const commander = require('commander');
const program = new  commander.Command();

program.version('0.0.1');

program
    .option('-s, --start', 'start game')

program.parse(process.argv);

const options = program.opts();

if (options.start){

}



