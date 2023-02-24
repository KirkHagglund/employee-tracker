const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Trebek22!',
        database: 'company_db'
    },
    console.log('Connected to the company_db database.')
);

/*inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'menu',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
        },
        {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'deptname',
            when: (answers) => answers.menu ==='add a department',
        },
        {
            type: 'input',
            message: 'What is the name of the role?',
            name: 'addrole',
            when: (answers) => answers.menu === 'add a role',
        },
        {
            type: 'input',
            message: "What is the employee's first name?",
            name: 'firstname',
            when: (answers) => answers.menu === 'add an employee',
        },
        {
            type: 'input',
            message: "What is the employee's last name?",
            name: 'lastname',
            when: (answers) => answers.firstname,
        },
        {
            type: 'list',
            message: "What is the employee's role?",
            name: 'pickrole',
            choices: ['Role 1', 'Role 2', 'Role 3'],
            when: (answers) => answers.lastname,
        },
        {
            type: 'list',
            message: "Who is the employee's manager?",
            name: 'pickmanager',
            choices: ['Manager 1', 'Manager 2', 'Manager 3'],
            when: (answers) => answers.pickrole,
        },
        {
            type: 'list',
            message: "What is the employee's name?",
            name: 'rolename',
            choices: ['Name 1', 'Name 2'],
            when: (answers) => answers.menu === 'update an employee role',
        },
        {
            type: 'list',
            message: "What is the employee's new role?",
            name: 'updaterole',
            choices: ['Role 1', 'Role 2'],
            when: (answers) => answers.rolename,
        }
    ]);*/

// Main inquirer menu question
const mainMenu = [
    {
        type: 'input',
        message: 'What would you like to do?',
        name: 'menu',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
    },
];

// Function containing initial inquirer prompt question and switch statement
const init = function () {
    inquirer
        .prompt(mainMenu)
        .then((answer) => {
            switch (answer.mainMenu) {
                case mainMenu.menu === 'view all departments':
                    viewDepts();
                    break;
                case mainMenu.menu === 'view all roles':
                    viewRoles();
                    break;
                case mainMenu.menu === 'view all employees':
                    viewEmployees();
                    break;
                case mainMenu.menu === 'add a department':
                    addDept();
                    break;
                case mainMenu.menu === 'add a role':
                    addRole();
                    break;
                case mainMenu.menu === 'add an employee':
                    addEmployee();
                    break;
                case mainMenu.menu === 'update an employee role':
                    updateRole();
                    break;
            };
        })
};

// Function call to initialize app
init();