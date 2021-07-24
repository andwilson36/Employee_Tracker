const express = require('express');
const mysql = require('mysql2');
// PORT
const PORT = process.env.PORT || 3001;
// middleware
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'classlist_db'
    },
    console.info('Connected to database successfully.')
);

db.query('SELECT * FROM department', function (err, results) {
    console.log(results);
});

// default response
app.use((req, res => {
    res.status(404).end();
}));

app.listen(PORT, () => {
    console.info(`Server listening at ${PORT}`);
})