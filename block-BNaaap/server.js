const http = require('http');

const server = http.createServer(handleServer);

function handleServer(req,res){
    console.log(req.method);
    res.statusCode = 201;
    res.setHeader("Content-Type","text/html");
    res.end("hurray!!!!!!!");
}

server.listen(4444, () => console.log("welcome to node.js!!!!!!!!!"))