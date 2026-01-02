import { createServer } from 'node:http';
import fs from 'node:fs/promises';

const server = createServer(async(req,res)=>{
    //console.log(`request recieved`);


    //res.writeHead(200,{'content-type':'text/html'})
    //console.log('req',req);
    if(req.url==='/'){
        res.writeHead(200,{'content-type':'text/html'});
        const data =await fs.readFile('./index.html');
        res.end(data);
    }else if(req.url==='/about'){
        res.writeHead(200,{'content-type':'text/html'});
        res.end('<h1>helloo aditya kumar </h1>');
    }

    
})

server.listen(3000,()=>{
    console.log("server trigger.....");
})