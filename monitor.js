import os from 'node:os';


function monitor(){
    //take snapshot 
    // take another snapshot after a second

    const oldCpus = os.cpus();

    // console.log('cpus:',oldCpus());

    setTimeout(()=>{
        const newcpus = os.cpus();


        const usage = newcpus.map((cpu,i)=>{
            return {
                core:i,
                usage:calculateCPU(oldCpus[i],newcpus[i])+'%'
            };
        });
        

        console.clear()
        console.table(usage);
    },1000)


}

function calculateCPU(oldCpus,newcpus){
    const oldTotal = Object.values(oldCpus.times).reduce((a,b) => a+b);

    const newTotal = Object.values(newcpus.times).reduce((a,b)=>a+b);

    const idle = newcpus.times.idle - oldCpus.times.idle;
    const total = newTotal - oldTotal;
    const used = total - idle;

    return ((100*used) / total).toFixed(1);
}

setInterval(monitor , 5000); // for running again and again in fixed time interval 
                             // use setinterval
                             // 1000= 1000milisecond , 1second






console.log(Chalk.bgMagenta(`----------------aditya------------`));