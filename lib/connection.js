const mysql = require('mysql2');
require('dotenv').config();
// connects to SQL server
const db = mysql.createConnection({
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'password',
        database: 'employee_db'
    },
    console.log(`Connected to the employee database.`)
);

module.exports = db;