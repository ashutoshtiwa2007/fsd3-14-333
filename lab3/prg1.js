import http from "http"

const server = http.createServer((req,res)=> {
    console.log("Welocme to the server")
    console.log(req.url);
    console.log("Request Method");
    console.log(req.method);
    console.log("Request Header");
    console.log(req.headers);
        res.end("hello")
});
const port = 5000
server.listen(port,()=>console.log(`sever runnning http://localhost:${port}`));