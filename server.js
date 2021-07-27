const express = require('express');
const mysql = require('mysql2');
const Prompt = require('./js/prompt');
const Logo = require('./js/logo');
const logo = new Logo();
const displayPrompt = new Prompt();
import choice from './js/prompt.js';
// PORT
const PORT = process.env.PORT || 3001;
// middleware
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'employee_db'
    },
    logo.displayLogo(),
    console.info('Connected to database successfully.')
);

// db.query('SELECT * FROM department', function (err, results) {
//     console.log(results);
// });

// // default response
// app.use((req, res) => {
//     res.status(404).end();
// });

// app.listen(PORT, () => {
//     console.info(`Server listening at ${PORT}`);
// });
// to display the prompt
displayPrompt.menuPrompt();
console.info(choice);