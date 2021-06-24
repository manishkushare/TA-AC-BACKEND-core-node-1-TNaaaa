console.log("welcome to node.js");
const os = require('os');
const {readFile,unlink} = require('fs');

const readFileResult = readFile("./block-BNaaaj/index.md",(err,res)=> {
    console.log(res);
})
console.log(readFileResult);


const osCPU = os.cpus().length;
console.log(osCPU,"cpu length");

const osFreeMemory = os.freemem();
console.log(osFreeMemory);
const upTime = os.uptime();
console.log(upTime);
const osVersion = os.version();
console.log(osVersion);


let buff = Buffer.alloc(12);
buff.write("Welcome to node.js, here you will learn how to build backedn application")
console.log(buff.toString());


//blocking code
console.log(buff);
//non-blocking code
setTimeout(()=> console.log(buff),1000);