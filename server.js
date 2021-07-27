const express = require('express');
const mysql = require('mysql2');
const sequelize = require('./config/connection');
const Logo = require('./js/logo');
const logo = new Logo();
// PORT
const PORT = process.env.PORT || 3001;
// middleware
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log('Now listening'));
    logo.displayLogo()
});