import { createServer } from 'node:http';
//import fs from 'node:fs/promises';
//import * as fs from 'node:fs/promises';
import fs from 'node:fs'

const server = createServer(async(req,res)=>{
    //console.log(`request recieved`);


    //res.writeHead(200,{'content-type':'text/html'})
    //console.log('req',req);
    if(req.url==='/'){
        //res.writeHead(200,{'content-type':'text/html'});
        //const data =await fs.readFile('./index.html');
        const datastream = fs.createReadStream('./index.html')

        datastream.pipe(res);
        // datastream.on('data',(chunk)=>{
        //     res.write(chunk);
        // });

        // datastream.on('end',()=>{
        //     res.end();
        // });
        //res.end(data);
        
    }else if(req.url==='/about'){
        res.writeHead(200,{'content-type':'text/html'});
        res.end('<h1>helloo aditya kumar </h1>');
    }else if (req.url === '/expenses'){
        //Api 
        //Create an expense
        //POST


        if(req.method === 'POST'){
            //READ DATA from reques
            let buffer =''
            //store it in json database
            req.on('data',(chunk)=>{
                console.log('chunk' , chunk);
                //buffer = buffer + data.toString();
            })
        }else if(req.method === 'Get'){
            // read data from json db
            // return the data to client
        }
    }

})

server.listen(3000,()=>{
    console.log("server trigger.....");
})