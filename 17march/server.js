/**create a  basic express js application */

const express = require("express");
const app = express();
app.use(express.json());    
/** this method is used to handle GET request user send get request to the server and the sever fetch the data */
app.get("/", (req, res) => {
  res.status(200).send("api hit successfully");
});
app.get("/about", (req, res) => {        
  res.status(200).send("this is about page");
});
app.post("/name",(req,res)=>{
    const {name}=req.body
    res.status(200).send(`hello ${name}`);
})
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
