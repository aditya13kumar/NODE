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


async function deletefolder(removefold) {
    await fs.rm(removefold,{recursive:true}); // for delete folder
}
//deletefolder('./content');





async function deletefile(params) {
   await fs.unlink(params); //for delete file  
}
//deletefile('./text.txt');




async function readfile(pathname){
   const data= await fs.readFile(pathname,'utf-8');
    console.log('data',data);
}
//readfile('./text.txt');





async function createfolder(foldername){
    await fs.mkdir(foldername,{recursive:true});
}
//createfolder('./content/pages');  
//this is why use for recursive that we can create folder in folder







async function writefile(pathname,content = ''){
    await fs.appendFile(pathname, content);
}






async function createfile(pathname,content=''){
    await fs.writeFile(pathname,content);
}

createfile('./hello.txt','Hello Node js!! \n pissu here!!');

async function getfileInfo(filepath) {
    const stats = await fs.stat(filepath);
    return{
        size:`${(stats.size / 1024).toFixed(2)} KB`,
        created:stats.birthtime.toLocaleString(),
        modified:stats.mtime.toLocaleString(),

    }

  
    
}
getfileInfo('./hello.txt').then(data=>{console.log(data)});
 




// async function createfile(pathname){
//     try{

//      await fs.writeFile(pathname,'addiiitttyyyyaaa\n'); /// suspend this code
//      await fs.appendFile(pathname,'PPPPiiitttyyyyaaa\N');
//     }catch(err){
//         console.log(`errooorr`)
//     }
//     console.log(`file createdd!!!`);
// }
// createfile('./text.txt');
