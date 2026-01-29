const  express = require('express');
const app = express();
const cors = require('cors');
const port= 8080;

app.use(cors({
  origin: "http://localhost:5173"
}));

app.get('/',(req,res)=>{
    res.send('this my first server');
})
app.get('/api/about',(req,res)=>{
    const student = [
        {
            id:1,
            name:"prashant",
            class:"12"
        },

        {
            id:2,
            name:"Rohan",
            class:"2"
        },
        {
            id:3,
            name:"prince",
            class:"10"
        },

        {
            id:4,
            name:"peyush",
            class:"9"
        },

        {
            id:5,
            name:"Reshma",
            class:"11"
        },
    ]

    res.send(student);
})
app.get('/contact',(req,res)=>{
    res.send('this my  contact page');
})

app.listen(port,()=>{
    console.log("Server is  live");
    
})