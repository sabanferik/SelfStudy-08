'use strict'

const express = require('express')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || '127.0.0.1'

app.get('/', (req, res) => {
    res.errorStatusCode = 501
    throw new Error('error')
    res.send('Hello World!')
})
const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res?.errorStatusCode || 500
    res.status(errorStatusCode).send({
        error: true,
        status: false,
        message: err.message,
        cause: err.cause,
        stack: err.stack
    })
}
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Example app listening on port http://${HOST}:${PORT}`)
})
