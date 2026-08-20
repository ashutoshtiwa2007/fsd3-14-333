import http from "http"


const server = http.createServer((req,res)=>{
   
    res.end("<h1 style='color: #FF5733;'>Welcome</h1>");
});


server.listen(5000,()=>console.log("server is running"));
