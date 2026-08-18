import http from "http"

const server = http.createServer();
server.on('request',(req,res)=>{
    res.write("<h1>Welcome</h1>");
    res.end();
});

server.listen(5000,()=>{
    console.log("runningthis is ")
});
