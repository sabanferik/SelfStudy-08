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
const app = express();
const products = require("./products.json");

app.listen(3000, function () {
  console.log("server başladı");
});

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

app.use(express.json())// gelen body bilgisini parse edip anlaşılabilir yapıyı dönüştürür.
app.get("/", (req, res) => {
  res.send({
    message: "Hello World",
  });
});

app.get("/products", (req, res) => {
  console.log(req.query);
  //   const page = req.query.page || 1
  //   const limit = req.query.limit || 10
  const { page = 1, limit = 10, category = "" } = req.query;
  // Album.findAll().limit(3) => Select * from album Limit 3
  res.send({
    message: "Hello Products",
    products: products
      .filter((item) => item.category.includes(category))
      .slice((page - 1) * limit, page * limit),
    page,
    limit,
    category,
  });
});

app.post("/products", (req, res) => {
  console.log(req);
  products.push(req.body);
  res.send({
    data: req.body,
    products
  });
});

app.get("/products/:id",(req,res)=>{
    if (products.filter((item) => item.id == req.params.id).length){
        res.send(products.find((item) => item.id == req.params.id));
    }else{
        res.status(404).send({
            error:true,
          message: "Not Found",
        });
    }
      
})
