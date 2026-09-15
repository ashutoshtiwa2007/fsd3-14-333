import express from 'express'
const app = express()
app.get("/",(req,res)=>{
    res.send("<h1>Hello Express</h1>")
})
app.listen(2000,()=>console.log("sever is gunning"))