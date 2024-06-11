'use strict'
/*
    EXPRESSJS 
    ! TODO PROJECT
*/

// npm i express dotenv
// npm i express-async-error // async func. error control
// npm install sequelize sqlite3

const express = require('express')
const app = express()

//catch async-error  
require("express-async-error")

require('dotenv').config()
const PORT=process.env?.PORT ||  8000
const HOST=process.env?.HOST || '127.0.0.1'

// app.all('/',(req, res)=>{
//     res.send('TODO APP')
// })

/*
app.use('/todo',(req, res)=>{ // TODO + ALL url
    res.send('TODO APP')
})
*/

// json to obj  and obj to json 
app.use(express.json())



//? CRUD operations

const router=express.Router()

const todo=require('./src/controllers/todoController')

// LIST todos (all)
router.get('/todos',  todo.list )
// CREATE todo
router.post('/todos', todo.create)

// READ todo  (with id)
router.get('/todos/:id',todo.get )
// UPDATE todo
router.put('/todos/:id', todo.update)
// DELETE todo
router.delete('/todos/:id', todo.delete)

app.use(router)
// error control
// const errorHandler = (err, req, res, next) => {
//     const errorStatusCode = res?.errorStatusCode || 500
//     res.status(errorStatusCode).send({
//         error: true,
//         status: false,
//         message: err.message,
//         // cause: err.cause,
//         // stack: err.stack
//     })
// }
app.use(require('./src/middlewares/errorHandler') )

app.listen(PORT,()=>console.log(`server runned http://${HOST}:${PORT}`))

