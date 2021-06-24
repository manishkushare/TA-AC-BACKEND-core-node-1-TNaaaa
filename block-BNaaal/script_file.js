const http = require('http');

const server = http.createServer(handleServer);

function handleServer(req,res){
    console.log(req,res);
    res.end("Hey you are onserver 4000 , hurray!!!!")
}

server.listen(4000,()=> console.log("Server is hosted on port 4000"))