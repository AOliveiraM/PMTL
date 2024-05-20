import mysql from 'mysql'
import {config} from 'dotenv';

export const db = mysql.createPool({
    host: "localhost",
    user: 'root',
    password: '0Fft43gr1d!',
    database: "Persons",
    insecureAuth: true
})