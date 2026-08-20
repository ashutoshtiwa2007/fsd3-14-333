import http from "http"

const server = http.createServer((req,res) => {
    res.writeHead(404,{
        'content-type':'text/plain',
    });
    res.end("<h1>Welcome to the server</h1>")

});
const port = 5000
server.listen(port,()=>console.log(`sever runnning http://localhost:${port}`));