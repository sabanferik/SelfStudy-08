"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
/*
    $ npm i express dotenv mongoose express-async-errors
*/

const express = require('express')
const app = express()

/* ------------------------------------------------------- */
// Required Modules

//* envVariables to process.env
require('dotenv').config()
const PORT = process.env.PORT || 8000;

//? asyncErrors to errorHandler
require("express-async-errors")

/* -------------------------------------------------------------------------- */
/*                               Configurations                               */
/* -------------------------------------------------------------------------- */

//! database connection
const {dbConnection} = require("./src/configs/dbConnection")
dbConnection()


/* -------------------------------------------------------------------------- */
/*                                 MiddleWares                                */
/* -------------------------------------------------------------------------- */

//* accept json
app.use(express.json())


//*Filter,Search,Sort,Pagination(res.getModelList)
require("./src/middlewares/findSearchSortPagi")

/* -------------------------------------------------------------------------- */
/*                                   Routes                                   */
/* -------------------------------------------------------------------------- */

app.all("/",(req,res)=> {
    res.send("Welcome to the Personnel API")
})

app.use("/departments", require("./src/routes/department.router"));


/* ------------------------------------------------------- */

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, () => console.log('http://127.0.0.1:' + PORT))

/* ------------------------------------------------------- */
