const http = require('http');

const server = http.createServer(hadnleServer);

function hadnleServer(req,res){
    console.log(req.headers, " :headers");
    console.log(req.method," :method");
    console.log(req.url, " :url");
    res.end("hurray!")
}

server.listen(3000,() => console.log("welcome ot node.js"))