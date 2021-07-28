const express = require('express');
const inquirer = require('inquirer');
const prompter = require('./lib/prompt');
const ViewAll = require('./lib/tableData');
const view = new ViewAll();
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
            switch (response.menu) {
                case 'View Employees':
                    inquirer.prompt(prompter.menuViewEmployees)
                        .then((response) => {
                            switch (response.menu) {
                                case 'View All Employees':
                                    view.employees(response.menu);
                                    break;
                            }
                        })
                    break;
                case 'Add Employee':
            }
        })
}

logo.displayLogo()

app.listen(PORT, () => {
    prompt();
});