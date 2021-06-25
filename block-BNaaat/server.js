const fs = require('fs');
const http = require('http');

const url = require('url');

const server = http.createServer(hadnleServer);

function hadnleServer(req,res){
    var parsedURL = url.parse(req.url);
    var pathName = parsedURL.pathname;

    if(req.method === "GET" && pathName === "/file"){
        res.setHeader('Content-Type', 'text/html');
        fs.readFile("./node.html", (err,content)=> {
            res.end(content);
        })
    }
    else if(req.method === "GET", pathName === "/stream"){
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream("./node.html").pipe(res);

    }
}

server.listen(5555, () => console.log("welcome to node.js"));