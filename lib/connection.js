const Sequelize = require('sequelize');
const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'password',
        database: 'employee_db'
    },
    console.log(`Connected to the books_db database.`)
);

module.exports = db;