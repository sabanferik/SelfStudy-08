// kurulum
// https://expressjs.com/en/starter/installing.html
// kill $(lsof -t -i:8000) portu öldürmek

'use strict'

const express = require('express')
const app = express()
require('dotenv').config()

const PORT=process.env.PORT || 8000
const HOST=process.env.HOST || '127.0.0.1'

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.get('/', (req, res) => {
//     // res.write('Hello World)
//     // res.end()
//     res.send('Hello World!')
// })

// app.all('/', (req, res, next) => {  // tüm istekler
//     console.log('req >> ', req);
//     next();
// })

// app.get('/', (req, res) => {res.send('GET method called')}) // listeleme ve/veya bilgi almak için
// app.post('/', (req, res) => {res.send('POST method called')}) // yeni bir kullanıcı veya bilgi kaydedecekseniz
// app.put('/', (req, res) => {res.send('PUT method called')}) // bilgi güncellemesi yapmak için
// app.patch('/', (req, res) => {res.send('PATCH method called')}) // bilgi güncellemesi yapmak için
// app.delete('/', (req, res) => {res.send('DELETE method called')}) // silme işlemi


app.get('/elbise/kadin', (req, res) => {res.send({message: 'GET method called'})}) 
    // http://127.0.0.1:8000/elbise/kadin

// app.get('/elbise', (req, res) => {res.send({message: 'GET method called (elbise)'})}) 
// app.get('/elbiseler', (req, res) => {res.send({message: 'GET method called (elbiseler)'})}) 
// yerine (ler)? 
// app.get('/elbise(ler)?', (req, res) => {res.send({message: 'GET method called (elbise(ler))'})}) 

// app.get('/elbise(ler)?aa', (req, res) => {
//     res.send({message: 'GET method called (?)'})
// }) 

//? regex
// https://www.geeksforgeeks.org/how-to-setup-regex-for-expressjs-router-url-in-node-js/
//app.get(/test/, (req, res) => {res.send('GET method called')}) // içinde test olmalı
// http://127.0.0.1:8000/aatestyy000
// http://127.0.0.1:8000/testyy000
// http://127.0.0.1:8000/test

//app.get(/test$/, (req, res) => {res.send('GET method called')}) // test ile bitmeli
//http://127.0.0.1:8000/test
//http://127.0.0.1:8000/dcdxzczxatest

//? url params
// app.get('/:userId/:productId', (req, res) => {
//     const {userId, productId} = req.params

//     console.log(userId, productId);

//     // res.send({userId: userId, productId: productId})
//     res.send({userId, productId})
// })

// app.get('/:userId/:productId', (req, res) => {
//     res.send({
//         protocol: req.protocol,
//         hostname: req.hostname,
//         method: req.method,
//         url: req.url,
//         params: req.params,
//         body: req.body,
//         query: req.query,
//         header: req.headers
//     })
// })

//? QUERY
/*
app.get('/', (req, res) => {
    res.send({query: req.query})
})
*/
//http://127.0.0.1:8000/?name=test&surname=user
/* res yanıtıdır
{
    "query": {
      "name": "test",
      "surname": "user"
    }
  }
  */

//? DIKKAT
//http://127.0.0.1:8000/test-user/elbise/pantalon/kadin-pantalon
// app.get('/:name-:surname/:topCategory/:subCategory/:gender-:genderCategory', (req, res) => {
//     res.status(419).send(req.params)
// })
/* response değeri
{
  "name": "test",
  "surname": "user",
  "topCategory": "elbise",
  "subCategory": "pantalon",
  "gender": "kadin",
  "genderCategory": "pantalon"
}
*/

//https://restfulapi.net/http-status-codes/
// HTTP defines these standard status codes that can be used to convey the results of a client’s request. The status codes are divided into five categories.

// 1xx: Informational – Communicates transfer protocol-level information.
// 2xx: Success – Indicates that the client’s request was accepted successfully.
// 3xx: Redirection – Indicates that the client must take some additional action in order to complete their request.
// 4xx: Client Error – This category of error status codes points the finger at clients.
// 5xx: Server Error – The server takes responsibility for these error status codes.

//? EXTRA
/*
app.get('/', (req, res) => {
    //res.redirect('https://www.google.com')
    res.redirect(302, '/about')
})

app.get('/about', (req, res) => {
    res.send('about')
})
*/

//* file
/*
app.get('/file', (req, res) => {
    res.sendFile(`${__dirname}/readme.md`)
})

app.get('/download', (req, res) => {
    res.download('./readme.md', 'express-routing.txt')
})
*/

app.listen(PORT, () => {
    console.log(`Example app listening on port http://${HOST}:${PORT}`)
})