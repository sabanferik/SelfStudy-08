'use strict'
/*
    NODE JS SERVER
*/
console.log("hi")
const http=require('node:http') 

// const dotenv=require(dotenv)
// dotenv.config()
const dotenv=require('dotenv').config()
const PORT=process.env.PORT
const HOST=process.env.HOST


/*
http.createServer((parametre1,parametre2)=>{

    console.log("server runned")
})
*/
/*
http.createServer((parametre1,parametre2)=>{

    console.log("server runned")
}).listen(8000)
*/
// 1. param request, 2. param response


// http.createServer((request,response)=>{
    /*
const app=http.createServer((req,res)=>{
    res.end('server runned')


    // res.end('bye') // birden fazla olmaz
    // console.log(req.method);
    // console.log("server test")
})
// app.listen(8000)
// app.listen(PORT,()=>console.log('server runned http://127.0.0.1' ))

app.listen(PORT,()=>console.log(`server runned http://${HOST}`))
*/
/* SERVER  */

const app=http.createServer((req,res)=>{


    res.end('server runned')
  
})
app.listen(PORT,()=>console.log(`server runned http://${HOST}`))