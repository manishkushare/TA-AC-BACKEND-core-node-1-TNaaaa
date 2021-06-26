const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer(handleserver);
function handleserver(req,res){

    let parsedURL = url.parse(req.url);
    let pathName = parsedURL.pathname;

    if(req.method === "GET" && pathName ==="/"){
        res.setHeader('Content-Type','text/html');
        fs.createReadStream('./index.html').pipe(res);
    }
    else if(req.method === "GET" && pathName === "/about.html"){
        res.setHeader('Content-Type','text/html');
        fs.createReadStream('./about.html').pipe(res);
    }
    else if(req.method === "GET" && pathName === "/cardio-pulmonary.html"){
        res.setHeader('Content-Type','text/html');
        fs.createReadStream('./cardio-pulmonary.html').pipe(res);
    }
    else if(req.method === "GET" && pathName === "/community.html"){
        res.setHeader('Content-Type','text/html');
        fs.createReadStream('./community.html').pipe(res);
    }
    else if(req.method === "GET" && pathName === "/contact_us.html"){
        res.setHeader('Content-Type','text/html');
        fs.createReadStream('./contact_us.html').pipe(res);
    }
    else if(req.method === "GET" && pathName === "/musculoskeleton.html"){
        res.setHeader('Content-Type','text/html');
        fs.createReadStream('./musculoskeleton.html').pipe(res);
    }
    else if(req.method === "GET" && pathName === "/neurological.html"){
        res.setHeader('Content-Type','text/html');
        fs.createReadStream('./neurological.html').pipe(res);
    }
    else if(req.method === "GET" && pathName === "/testimonials.html"){
        res.setHeader('Content-Type','text/html');
        fs.createReadStream('./testimonials.html').pipe(res);
    }
    else if(req.method === "GET" && pathName.split(".").pop() === "css"){
        console.log(pathName ," :Path name");
        res.setHeader("Content-Type", "text/css");
        fs.createReadStream(__dirname + req.url).pipe(res);
    }
    else if(req.method === "GET" && (pathName.split(".").pop().toLowerCase() === "jpg" || pathName.split(".").pop().toLowerCase() === "jpeg" || pathName.split(".").pop().toLowerCase() === "png")){
        res.setHeader("Content-Type", `image/${pathName.split(".").pop().toLowerCase()}`);
        fs.createReadStream(__dirname + req.url).pipe(res);
    }
    else if(req.method === "GET" && pathName.split(".").pop() === "js"){
        res.setHeader("Content-Type", "application/javascript");
        fs.createReadStream(__dirname + req.url).pipe(res);
    }
    else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end("Page not found");
    }


}

server.listen(5566,()=> console.log("welcome to Life Care Physuotherapy centre"));