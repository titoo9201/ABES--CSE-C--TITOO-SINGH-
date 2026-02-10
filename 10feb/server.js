// const http = require("http")
// const fs= require("fs")

// const server= http.createServer((req,res)=>{
//     if(req.url=="/")
//     {
//     fs.readFile("index.html","utf8",(err,htmlContent)=>{
//         if(err)
//         {
//             res.statusCode=500;
//             res.end("internal server error")
//             return 
//         }
//         res.setHeader("content-Type","text/html");
//         res.end(htmlContent)
//     })
//     }
//     else if (req.url=="/style.css")
//     {
//         fs.readFile("style.css","utf8",(err,cssContent)=>{
//             if(err)
//             {
//                 res.statusCode=500;
//                 res.end("internal server error ")
//                 return 
//             }
//               res.setHeader("content-Type","text/css");
//               res.end(cssContent)
//         })

//     }

//     else{
//         res.statusCode=404
//        res.end("not found")
//     }
// })

// const port =3000
// server.listen(port,()=>{
//     console.log("server is running on the port ",port);
    
// })