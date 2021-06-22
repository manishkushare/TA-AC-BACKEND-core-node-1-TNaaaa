// 
// var fs = require("fs");
// console.dir(fs);
// fs.readFile("./index.md",(err,content) => {
//     console.log(err,content);
// })
var path = require("path");
var filePath = path.join(__dirname,"file.md");
console.log(filePath);

// var os = require("os");
// console.dir(os)
// console.log(os.freemem());

// var buff = Buffer.alloc(4);
// buff.write("Hey");
// console.log(buff.toString());
// console.log(buff[1]);
// // buff[1] = 111;
// console.log(buff[1]);
// console.log(buff.toString());