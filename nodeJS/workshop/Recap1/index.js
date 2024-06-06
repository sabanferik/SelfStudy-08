//* http server
// const http = require('http');
// const url = require('url');

// const routeHandler = (req,res)=>{
//     console.log(req.url)
//     console.log(req.method)
//     const parsedUrl = url.parse(req.url,true)
//     console.log(parsedUrl)
//     // if (req.url == "/" && req.method == "GET") {
//     //   res.write("Hello World");
//     //   res.end();
//     // }
//     if (parsedUrl.pathname == "/" && req.method == "GET") {
//       res.write("Hello World");
//       res.end();
//     } else {
//       res.write("Not Found");
//       res.end();
//     }

// }
// const server = http.createServer(routeHandler)
// server.listen(3000)

const express = require("express");
const app = express()

app.listen(3000,function(){
    console.log("server başladı")
})

//* app.use() da okuma sırası önemlidir.
// app.use("/products", (req, res) => {
//   if (req.method == "GET") {
//     res.send("Hello GET PRoducts");
//   } else if (req.method == "POST") {
//     res.send("Hello POST");
//   } else {
//     res.send("Request is not GET or POST");
//   }
// });
// app.use("/", (req, res) => {
//   if (req.method == "GET") {
//     res.send("Hello GET");
//   } else if (req.method == "POST") {
//     res.send("Hello POST");
//   } else {
//     res.send("Request is not GET or POST");
//   }
// });

app.get("/",(req,res)=>{
    res.send({
        message:"Hello World"
    })
})