
import express from 'express';

import mysql from 'mysql';
import cors from 'cors'
import personRoutes from './routes/persons.js'



const server = express()



server.use(express.json());

server.use(cors());

server.use("/", personRoutes)

server.listen(3001, () => {
    console.log('Listening at port 3001 :)')
})