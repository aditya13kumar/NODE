//  import { error } from 'node:console';
// import * as fs from 'node:fs';


// function createfile(pathname){
//     //sync---------------
//     // fs.writeFileSync(pathname, 'hello node js\n');
//     // fs.writeFileSync(pathname, 'hello aditya js/n'); //over write 

//     // console.log(`file created!!`);

//     // fs.appendFileSync(pathname,'hello jvascript\n'); // for add





//     //Async
//     //error first calback
//     fs.writeFile(pathname,'hello addityaa!!!\n',(err)=>{   //Asynchronously writes data to a  file, replacing the file if it already exists.
//       if (!err){console.log('writing file!!')
//         return
//       };
//       if(err){console.log('some things went wrongs!!')
//         return
//       }
//     });

//      fs.appendFile(pathname,'hello pissuuu!!!\n',(err)=>{   //Asynchronously writes data to a  file, replacing the file if it already exists.
//       if (!err){console.log('writing file!!')
//         return
//       };
//       if(err){console.log('some things went wrongs!!')
//         return
//       }
//     });
   
//     console.log(`file created!!`);


// }
   

// createfile('./text.txt');





import * as fs from 'node:fs/promises';

async function createfile(pathname){
    await fs.writeFile(pathname,'addiiitttyyyyaaa');
    console.log(`file createdd!!!`);

}

createfile('./text.txt');