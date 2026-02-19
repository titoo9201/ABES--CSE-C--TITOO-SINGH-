const express = require("express")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))



app.get("/",(req,res)=>{
    res.send("hello world from gthe request")
})

app.post("/api/user",(req,res)=>{
    console.log(req.body);
    
    res.status(201).json({
        message:"user created successfully",
        data:req.body
    })
})


app.listen("3000",()=>{
    console.log("sever is runnig on the port 3000");    
})