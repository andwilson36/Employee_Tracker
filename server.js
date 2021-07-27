const express = require('express');
const inquirer = require('inquirer');
const prompter = require('./lib/prompt');
const mysql = require('mysql2');
const sequelize = require('./config/connection');
const Logo = require('./lib/logo');
const logo = new Logo();

// PORT
const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

function prompt() {
    inquirer.prompt(prompter.menuQuestions)
        .then((response) => {
            switch (response) {
                case 'View Employees':
                    inquirer.prompt(prompter.menuViewEmployees)
                        .then((response) => {
                            switch (response) {
                                case 'View All Employees':
                            }
                        })
            }
            case 'Add Employee':
                console.log('Add Employee');
                break;
                return 'Add Employee';
            case 'Update Employee Role':
                console.log('Update Employee Role');
                break;
                return 'Update Employee Role';
            case 'View All Roles':
                console.log('View All Roles');
                break;
                return 'View All Roles';
            case 'Add Role':
                console.log('Add Role');
                break;
                return 'Add Role';
            case 'View All Departments':
                console.log('View All Departments');
                break;
                return 'View All Departments';
            case 'Add Department':
                console.log('Add Department');
                break;
                return 'Add Department';
            case 'Quit':
                console.log('Quit');
                break;
                choice = 'Quit';
                return 'Quit';
        })
}


logo.displayLogo()

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log('Now listening'));

});