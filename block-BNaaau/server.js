const http = require('http');
const fs = require('fs');
const url = require('url');

const server1 = http.createServer(handleServer1);
function handleServer1(req,res){
    console.log(req,res);
}
server1.listen(5000);

const server2 = http.createServer(handleServer2);
function handleServer2(req,res){
    res.write("My first server in NodeJS");
    res.end();
}
server2.listen(5100);

const server3 = http.createServer(handleServer3);
function handleServer3(req,res){
    console.log(req.headers);
    // res.setHeader('Content-Type', 'application/json');
    res.end(req.headers['user-agent']);
}
server3.listen(5555);

const server4 = http.createServer(handleServer4);
function handleServer4(req,res){
    console.log(req.url,req.method);
    res.setHeader('Conetnt-Type','text/plain');
    res.write(req.method);
    res.write(req.url);
    res.end();
}
server4.listen(5566);

const server5 = http.createServer(handleServer5);
function handleServer5(req,res){ 
    res.setHeader('Content-Type','application/json');
    res.write(JSON.stringify(req.headers));
    res.end();
    
}
server5.listen(7000,()=> console.log("server listening on port 7000"));

const server6 = http.createServer(handleServer6);
function handleServer6(req,res){
    res.statusCode = 202;
    res.end("Hello");
}
server6.listen(3333);

const server7 = http.createServer(handleServer7);
function handleServer7(req,res){
    // res.setHeader('Content-Type','text/html');
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h3>Welcome to altcampus hurray !!!!!</h3>');
    res.end();
}
server7.listen(8000);


const server8 = http.createServer(handleServer8);
function handleServer8(req,res){
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify({success: true, message: 'Welcome to Nodejs'}))
}
server8.listen(8888);

const server9 = http.createServer(handleServer9);
function handleServer9(req,res){
    console.log(req.method);
    res.setHeader('Content-Type','text/html');
    res.end('<h2>posted for first time</h2>');
}
server9.listen(5050);

const server10 = http.createServer(handleServer10);
function handleServer10(req,res){
    let parsedURL = url.parse(req.url);
    let pathName = parsedURL.pathname;
    if(req.method === "GET" && pathName === "/route"){
        res.setHeader('Content-Type','text/plain');
        res.write('Manish');
        res.end();
    }
    else if(req.method === "GET" && pathName === "/about" ){
        res.setHeader('Content-Type','text/html');
        res.write("<h2>Manish</h2>")
        res.end();
    }
    else if(req.method === "GET" && pathName === "/users"){
        res.setHeader('Content-Type','text/html');
        fs.createReadStream("./form.html").pipe(res);
    }
    else if(req.method === "POST" && pathName === "/users"){
        res.setHeader('Content-Type','text/plain');
        res.write("Posted for the second time");
        res.end();
    }
    else{
        res.writeHead(404,{'ContentType':'text/html'});
        res.write("Page not found");
        res.end();
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
server10.listen(2345);

const server11 = http.createServer(handleServer11);
function handleServer11(req,res){
    let parsedURL = url.parse(req.url,true);
    let pathName = parsedURL.pathname;
    console.log(pathName,"pathname");
    console.log(parsedURL,"parsed url");
    res.setHeader('Content-Type','application/json');
    res.write(JSON.stringify(parsedURL.query));
    res.end();

}
server11.listen(3111);


  