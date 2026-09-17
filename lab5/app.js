import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Hello Express</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1>");
});

app.post("/login", (req, res) => {
    res.send({
        msg: "User login"
    });
});

app.put("/user/update/1", (req, res) => {
    res.send({
        msg: "Update user"
    });
});

app.delete("/user/1", (req, res) => {
    res.send({
        msg: "Delete user"
    });
});

app.use((req, res) => {
    res.status(404).send("Not found");
});

const server = app.listen(2000, () => {
    console.log("Server is running on port 2000");
});

server.on("error", (err) => {
    console.log("Server error:", err);
});