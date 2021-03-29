const commander = require('commander');
const program = new  commander.Command();

program.version('0.0.1');

program
    .option('-c, --create <type>', 'create class')
    .option('-ctor, --create_with_constructor', 'class with constructor')
    .option('-meth, --add_Meth <type>', 'class with method');

program.parse(process.argv);

const options = program.opts();

let isClass = false;
let isClass_n_Const = false;
let isClass_n_Meth = false;

let consturcor_str = "";
let method_str = "";

let ClassName = "";

if (options.create){
    isClass = true;
    ClassName = `${options.create}`;
}

if (options.create_with_constructor){
    if(isClass == true){

       isClass_n_Const = true; 
       consturcor_str = `constructor(){\n\n\t}\n`;

    } 
    else console.log("You must input class name!");
}

if (options.add_Meth){
    if(isClass == true) {
        isClassWithConst = true;

        method_str = `${options.add_Meth}(){\n\n\t}\n`;
    }
    else console.log("You must input class name!");

}

if(isClass == true){

    const fs = require("fs");
    let TextContent = `class ${ClassName}{\n\t${consturcor_str}\n\t${method_str}}`;


    fs.writeFileSync(`${ClassName}.js`, `${TextContent}`);

    console.log(`- ${ClassName} created`);
}