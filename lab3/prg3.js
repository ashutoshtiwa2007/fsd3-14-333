import http from "http"

const server = http.createServer((req,res) => {
    res.headersSent.setheader
    if (req.url=='/')
        res.end('<h1>Home Page</h1>')
    else if(req.url == '/about')
        res.end('<h2>About us page</h2>')
    else if(req.url == '/product')
        res.end(`<h1>Mobile Phone</h1>
            <h2>Price: 25000</h2>
            <p>Discount : 5%</p>
            <a href='#'>Buy now</a>`)
    else{
        res.statusCode = 404;
        res.end(`
            <h1> 404,Notfound</h1>
            <p>Page not found</p>`)
    }

});

const port = 5000
server.listen(port,()=>console.log(`sever runnning http://localhost:${port}`));