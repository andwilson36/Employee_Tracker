const inquirer = require('inquirer');
const ViewAll = require('./tableData');
const data = new ViewAll();

async function menuQuestions() {
    inquirer.prompt([{
        type: 'list',
        name: 'menu',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
    }]).then((response) => {
        response.menu == 'View All Employees' ? viewEmployees(response) :
            response.menu == 'Add Employee' ? addEmployee() :
            response.menu == 'Update Employee Role' ? updateEmployee() :
            response.menu == 'View All Roles' ? viewRoles() :
            response.menu == 'Add Role' ? addRole() :
            response.menu == 'View All Departments' ? viewDepartments() :
            response.menu == 'Add Department' ? addDepartment() :
            quit();
    })
}

async function viewEmployees(response) {
    data.employees(response.menu);
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
    data.employees(response, newEmployee);
    menuQuestions();
}

async function updateEmployee() {
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
    data.employees(response, updatedEmployee);
    menuQuestions();
}

async function viewRoles() {
    const response = 'View All Roles';
    data.employees(response);
    menuQuestions();
}

async function addRole() {
    const response = 'Add Role';
    const roleName = await inquirer.prompt({
        type: 'input',
        name: 'roleName',
        message: 'Enter the name of the role:'
    })
    const salary = await inquirer.prompt({
        type: 'input',
        name: 'salary',
        message: 'Enter the salary of the role:'
    })
    const department = await inquirer.prompt({
        type: 'input',
        name: 'department',
        message: 'Enter the Department ID that the role belongs to:'
    })
    const newRole = {
        title: roleName.roleName,
        salary: salary.salary,
        department_id: department.department
    }
    data.employees(response, newRole);
    menuQuestions();
}

async function viewDepartments() {
    const response = 'View All Departments';
    data.employees(response)
    menuQuestions();
}

async function addDepartment() {
    const response = 'Add Department';
    const name = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'Enter name of department:'
    })
    newDepartment = {
        name: name.name,
    }
    data.employees(response, newDepartment)
    menuQuestions();
}

async function quit() {
    console.log('Bye');
}

module.exports = { menuQuestions, viewEmployees, addEmployee, quit }