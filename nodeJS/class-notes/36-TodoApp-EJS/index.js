'use strict'
/*
    EXPRESSJS 
    ! TODO PROJECT
*/

const express = require('express')
const app = express()

require('dotenv').config()
const PORT=process.env?.PORT ||  8000
const HOST=process.env?.HOST || '127.0.0.1'

//catch async-error  
require("express-async-errors")

// TEMPLATE

// https://expressjs.com/en/guide/using-template-engines.html
// https://ejs.co/
// https://www.npmjs.com/package/ejs
// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

// npm i ejs

app.set("view engine", "ejs")
// default folder './views' //! klasor app.js /index.js ile aynı dizinde olmalı 

// json to obj  and obj to json  
//! yeri onemli yukarıda kalsın
app.use(express.json())

//* Accept form data
// app.use(express.urlencoded({extended:false}))
//* Gelen verilerin sadece string olarak ele alnıması istenirse, extended: false özelliği kullanılır, fakat eğer bir JSON nesnesi olarak ele alınması istenirse, extended: true parametresi ile kullanmak gerekir. API hizmeti de sunduğumuz için bizim için uygun olan seçenek {extended: true} olacaktır.
app.use(express.urlencoded({ extended: true }));


app.all("/", (req,res)=>{
    // res.send("Welcome My App")
    // const name = "Anthony"
    // const title= "TodoApp"
    // res.render("index",{name,title})

    res.render("index", req.query)
})

// ROUTER
// app.use(require('./src/routers/todoRouter'))
app.use("/api",require('./src/routers/todoRouter'))
app.use("/view",require('./src/routers/todoTemplate'))


// errorHAndler
app.use(require('./src/middlewares/errorHandler') )

app.listen(PORT,()=>console.log(`server runned http://${HOST}:${PORT}`))

