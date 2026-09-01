import http from "http";
import { createReadStream } from "fs";
const server = http.createServer((req,res)=>{
    if(req.url === "/" && req.method === "GET"){
    res.end("<h1>Products Details</h1>")
    }
    else if (req.url === "/products"&& req.method ==="GET"){
        res.writeHead(200,{"content-type":"text/json"});
        const stream = createReadStream("./data/products")
        stream.pipe(res);
    }
    else{
        res.statusCode =404;
        res.end("not fpund")
    }
});
server.listen(4000,()=> console.log("hello is running "))

