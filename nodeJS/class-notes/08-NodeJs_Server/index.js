'use strict'
/*
    NODE JS SERVER
*/
console.log("hi")
const http=require('node:http') 
/*
http.createServer((parametre1,parametre2)=>{

    console.log("server runned")
})
*/
// 1. param request, 2. param response

// http.createServer((request,response)=>{
const app=http.createServer((req,res)=>{

    console.log("server runned")
})
app.listen(8000)