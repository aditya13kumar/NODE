import * as readline from 'node:readline/promises';
import chalk from "chalk";
import { stdin,stdout } from 'node:process';
import {createfile,createfolder,writefile,deletefile,deletefolder,ListItems} from './fs.js';




const rl = readline.createInterface(
    {input:stdin,
    output:stdout,
});
async function menu(){
    
    console.clear();
   
    console.log(chalk.blue.bold(`\n file 📁 system \n`));

    const option =[
        'create file',
        'create Folder',
        'Append File',
        'Delete file',
        'Delete Folder',
        'List Items',
        'Exit',
    ];

    option.forEach((opt,i)=>console.log(chalk.yellow(`${i + 1}`) + chalk.white(` ${opt}`)));

    const ans = await rl.question(chalk.cyan.bold(`\nSelect option: `));

    switch(ans){
        case '1': 
         const filepath = await rl.question(chalk.cyanBright.bold(`\n file path: `));
         await createfile(filepath);
         console.log(chalk.green(`✅ file created!`))
         break;
        case '2': 
         const folderpath = await rl.question(chalk.cyanBright.bold(`\n folder path: `));
         await createfolder(folderpath);
         console.log(chalk.green(`✅ folder created!`))
         break;
        case '3': 
         const appendpath = await rl.question(chalk.cyanBright.bold(`\nApend path: `));
         const content = await rl.question(chalk.cyanBright.bold(`\nContent.. \n`));
         await writefile(appendpath ,content);
         console.log(chalk.green(`✅ append file!`))
        break;
        case '4': 
         const deletepath = await rl.question(chalk.cyanBright.bold(`\nDelete path: `));
         await deletefile(deletepath);
         console.log(chalk.green(`✅file Deleted!`))
        break;
        case '5': 
         const deletefolderpath = await rl.question(chalk.cyanBright.bold(`\nDelete path: `));
         await deletefolder(deletefolderpath);
         console.log(chalk.green(`✅folder Deleted!`))
        break;
        case '6': 
         const listpath = await rl.question(chalk.cyanBright.bold(`\npath: `));
         const list = await ListItems(listpath);
         console.log(chalk.green(`.....`));
         list.forEach(list=>{
            return console.log(list);
         })
         break;
        case '7':
            rl.close();
            return;
         
    }
     await rl.question(chalk.red(`press to continue...`));

    menu();

}
menu();