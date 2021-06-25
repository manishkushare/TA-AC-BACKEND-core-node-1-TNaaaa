const http = require('http');
const url = require('url');
const server = http.createServer(handleServer);

function handleServer(req,res){
    console.log(req.method,req.url);
    var parsedURL = url.parse(req.url);
    var pathName = parsedURL.pathname;

    if(req.method === "GET" && pathName === "/"){
        res.setHeader('Content-Type','text/plain');
        res.write("Welcome to homepage");
        res.end();
    }
    else if(req.method === "GET" && pathName === "/about"){
        res.setHeader('Content-Type','text/html');
        res.write("<h2>This is all about NOde.JS</h2>");
        res.end();
    }
    else if(req.method === "POST" && pathName === "/about"){
        res.setHeader('Content-Type', 'application/json');
        res.write(`{'message':'this is a post request'}`);
        res.end()
    }
    else {
        res.writeHead(404, {'Content-Type':'text/plain'});
        res.write("Page not found");
        res.end();
    }
}

server.listen(3000,()=> console.log("Welcome to node.js"))