import express from "express";
import path from "path";
import { fileURLToPath } from "node:url";

const app = express();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);



app.get("/", (req, res) => {
    res.sendFile(path.join(dirname, "public", "index.html"));

    //projectfolder.public.index.html
});

app.get("/enquiry", (req, res) => {
    res.sendFile(path.join(dirname, "public", "enquiry.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(dirname, "public", "about.html"));
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});