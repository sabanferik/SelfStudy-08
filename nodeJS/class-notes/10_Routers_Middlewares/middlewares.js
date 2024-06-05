'use strict'
/* -------------------------------------------------------
    EXPRESS JS - MIDDLEWARES
------------------------------------------------------- */

const express = require('express')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || '127.0.0.1'

/* ------------------------------------------------------- */
//? Middleware functions must be has three parameters. 
//? Last parameter is for next().

// Middleware:

// app.get('/', (req, res, next) => {
//     console.log('Middleware');
//     next()
// })

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

/* ------------------------------------------------------- */
// http://127.0.0.1:8000?username=clarusway
// app.get('/', (req, res, next) => { // middleware
//     console.log(req.query?.username);
//     if (req.query?.username === 'clarusway'){
//         next()
//     } else {
//         res.send('username is wrong!')
//     }
// })

// app.get('/', (req, res) => { // normal router
//     res.send('welcome clarusway')
// })
/* ------------------------------------------------------- */

// app.get('/', (req, res, next) => {
//     console.log('middleware-1 started.');
//     next()
// })
// app.get('/', (req, res, next) => {
//     console.log('middleware-2 started.');
//     next()
// })
// app.get('/', (req, res, next) => {
//     console.log('middleware-3 started.');
//     next()
// })
// app.get('/', (req, res, next) => {
//     console.log('middleware-4 started.');
//     next()
// })
// app.get('/', (req, res, next) => {
//     console.log('middleware-5 started.');
//     next()
// })

// app.get('/', (req, res) => {
//     res.send('welcome clarusway')
// })
/* ------------------------------------------------------- */
//? Function

// const middlewareFunction = (req, res, next) => {
//     console.log('middleware function called');
//     next()
// }

// app.get('/', middlewareFunction, (req, res) => {
//     res.send('welcome clarusway')
// })

const middlewareFunctionOne = (req, res, next) => {
    console.log('middleware one function called');
    next()
}

const middlewareFunctionTwo = (req, res, next) => {
    console.log('middleware two function called');
    next()
}

app.get('/', middlewareFunctionOne, middlewareFunctionTwo, (req, res) => {
    res.send('welcome clarusway')
})
/* ------------------------------------------------------- */

app.listen(PORT, () => {
    console.log(`Example app listening on port http://${HOST}:${PORT}`)
})