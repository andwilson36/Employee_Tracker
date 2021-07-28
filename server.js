const express = require('express');
const Logo = require('./lib/logo');
const logo = new Logo();
const prompt = require('./lib/prompt')
    // PORT
const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

logo.displayLogo();
prompt.menuQuestions();