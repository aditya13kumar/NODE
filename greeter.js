// function getgreetings(hours){
//     if(hours < 4 || hours >= 19) return 'good night';
//     if(hours < 9 ) return 'good morning';
//     if(hours < 16) return 'good afternoon';
//     return 'good evening'
// }



// common module - old module
//module.exports = getgreetings;

// ES module ESM
//export default getgreetings;


//-------------------------------------

// export function getgreetings(hours){
//     if(hours < 4 || hours >= 19) return 'good night';
//     if(hours < 9 ) return 'good morning';
//     if(hours < 16) return 'good afternoon';
//     return 'good evening'
// }

import chalk from 'chalk';

console.log(chalk.bgBlue('Hello world!'));