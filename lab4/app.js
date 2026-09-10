import http from "http";
// import * as teams from 'teams.js'
import { getAllTeams,addTeam } from "./teams.js";
// import { parse as parseUrl} from "url"


const PORT = 5000;
const sendJson = (res, statusCode, data) => {
  res.writeHead(statusCode, { "content-type": "application/json" });
  res.end(data === "undefined" ? "" : JSON.stringify(data));
};
const parseJSONBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on("error",reject);
  });
};
const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;
    const query = Object.fromEntries(url.searchParams);
    const{method}=req;
    console.log('pathname',pathname);
    console.log('query',query);
    console.log("Method",method);

    if(pathname=== '/api/v1/teams' && method ==='GET'){
        
        let teams=getAllTeams();
        return sendJson(res,200,teams,"count",teams);
    } else if (pathname ==='/api/v1/teams'&& method == 'POST' ){
        const {tname,tl,members}=await parseJSONBody(req);
        if (!tname|| !tl || !members)
            return sendJson(res,400,{
        error:"bhaag jaa "});
        const team =addTeam({tname,tl,members});
        return sendJson(res,202,team,"Message","Team registered successfully")

    }
    else {
        res.statusCode=404;
    }
    res.end();
});

server.listen(5000, () => console.log("server is running"));
