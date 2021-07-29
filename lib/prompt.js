const inquirer = require('inquirer');
const ViewAll = require('./tableData');
const view = new ViewAll();

const empty = {}

async function menuQuestions() {
    inquirer.prompt([{
        type: 'list',
        name: 'menu',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
    }]).then((response) => {
        response.menu == 'View All Employees' ? viewEmployees(response) :
            response.menu == 'Add Employee' ? addEmployee() :
            response.menu == 'Update Employee Role' ? updateEmploy() :
            Quit();
    })
}

async function viewEmployees(response) {
    view.employees(response.menu);
    menuQuestions();
}

async function addEmployee() {
    const response = 'Add Employee';

    const first_name = await inquirer.prompt({
        type: 'input',
        name: 'first_name',
        message: 'What is the employees first name?',
    })
    const last_name = await inquirer.prompt({
        type: 'input',
        name: 'last_name',
        message: 'What is the employees last name?',
    })
    const role_id = await inquirer.prompt({
        type: 'input',
        name: 'role_id',
        message: 'What is the employees role ID?',
    })
    let manager_id = await inquirer.prompt({
        type: 'input',
        name: 'manager_id',
        message: 'What is the employees manager ID? (Enter 0 if manager)'
    })
    if (manager_id.manager_id == 0) {
        manager_id.manager_id = 'NULL';
    }

    const newEmployee = {
        first_name: first_name.first_name,
        last_name: last_name.last_name,
        role_id: role_id.role_id,
        manager_id: manager_id.manager_id
    }
    console.log(newEmployee)
    view.employees(response, newEmployee);
    menuQuestions();
}

async function updateEmploy() {
    const response = 'Update Employee Role';
    const selected_employee = await inquirer.prompt({
        type: 'input',
        name: 'selected_employee',
        message: "Enter employee ID you'd like to update:"
    })
    const newID = await inquirer.prompt({
        type: 'input',
        name: 'newID',
        message: 'Enter their new role ID:'
    })
    const updatedEmployee = {
        selected_employee: selected_employee.selected_employee,
        newID: newID.newID
    }
    view.employees(response, updatedEmployee);
    menuQuestions();
}

async function quit() {
    console.log('Bye');
}

module.exports = { menuQuestions, viewEmployees, addEmployee, quit }