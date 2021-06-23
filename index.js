console.log("welcome to node.js");
var fs = require("fs");// traditional way of loading library
var {readFile,readFileSync} = require("fs");// using destructring, only getting methods in a file which we require

fs.readFile("./block-BNaaag/content.md",(err,content) => {
    setTimeout(() => console.log("Hey, am async code",content),1000);
    console.log("Hey am sync code", content);
    console.log("Hey am sync code", content.toString());
    setTimeout(() => console.log("Hey, am async code",content.toString()),2000);
});

let result = readFileSync("./block-BNaaag/content.md")
console.log(result," :result");
var buff1 = Buffer.alloc(10);
console.log(buff1);
buff1.write("Welcome to Buffer");
console.log("buff1 after writing",buff1);
console.log(buff1.toString());