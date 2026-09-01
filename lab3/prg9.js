import http from "http";
import { createReadStream } from "node:fs";
import { readFile } from "fs/promises";
const server = http.createServer(async (req, res) => {
    if (req.url == "/"){
        res.writeHead(200,{"content-type":"text/html"});
        res.statusCode = 200;
        const stream = createReadStream('./airtag.html',{
        encoding: "utf-8",
    });
    stream.pipe(res);
}else if(req.url == '/mobile'){
        res.writeHead(200,{"content-type":"text/josn"});
        
        const mob = createReadStream("./data/products.json",{
        encoding: "utf-8"
    });
    mob.pipe(res);

} else if(req.url == "/manual"){
    res.writeHead(200,{"content-type":"text/plain"});
    const man = createReadStream("./data/chatgpt.txt"
    );
    man.pipe(res);
}

else{
    res.statusCode =404;
    res.end("not found")
}


});
server.listen(2000, () => console.log("prg9 is running"));