//const getgreetings = require("./greeter");   //-- common module

// import getgreetings from "./greeter.js"; //ESM -1



// import { getgreetings } from "./greeter.js";

// const name = process.argv[2];

// const hours = new Date().getHours(); //24

// const greeting = getgreetings(hours);

// console.log(`${greeting} ${name}!`);








import os from 'node:os';


console.log('cpus :',os.cpus().length);
console.log('total memory :',os.totalmem() / (1024 * 1024)); // in mb
console.log('free memory: ',os.freemem()/(1024*1024*1024));  // in Gb
console.log('host name:',os.hostname());
console.log("uptime" , os.uptime()/(60)) // in minute
console.log(`user info:`, os.userInfo());
console.log(`version:`,os.version());
console.log(`machine`, os.machine())
