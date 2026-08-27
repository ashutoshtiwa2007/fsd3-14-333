import http from "http";
import { createReadStream } from "node:fs";
import { readFile } from "fs/promises";
const server = http.createServer(async (req, res) => {
  if (req.url === "/stream") {
    const stream = createReadStream("big.txt", { encoding: "utf-8" });
    stream.pipe(res);
  } else if (req.url === "/normal") {
    const text = await readFile("big.txt");
    res.end(text);
}else if(req.url === "/product"){
    // res.writehead() status + content -tyoe
    res.setHeader("content-type","text/html")
    const data =createReadStream("product.html");
    data.pipe(res);
}


});
server.listen(2000, () => console.log("sever"));
