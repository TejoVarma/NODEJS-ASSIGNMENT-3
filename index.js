const http = require('http');
const fs = require('fs');
const fsPromise=require("fs/promises");

async function writeFile(){
    try{
        const data=await fsPromise.writeFile('index.html', '<h1>Hello World</h1>\n<p>This is Tejo...</p>');
        console.log("file created")

    }
    catch(err){
        console.log("Error while Writing File:- " + err);
    }
}
writeFile();

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type' : 'text/html'});
    let read = fs.createReadStream('index.html');
    read.pipe(res);
}).listen(8080);
console.log("server started");