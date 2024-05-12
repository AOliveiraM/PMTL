const express = require('express');
const cors = require('cors')
const mysql = require('mysql')
require('dotenv').config()
const server = express()

console.log('USER DB SELECTED:\n' ,process.env.DB_USERNAME)

const db = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'expense_spread',
})

server.use(express.json());

server.use(cors());




server.get("/persons", (req, res) => {
    let sql = "SELECT * FROM Persons"
    db.query(sql,(err, result) => {
        if(err){
            console.log(err)
        } else {
            res.send(result)
        }
    })

} )

server.listen(3000, () => {
    console.log('Listening at port 3000 :)')
})