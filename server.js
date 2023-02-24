// Import and assignment section
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

const viewDepts = require('./lib/query');
/*const viewRoles = require('./lib/query');
const viewEmployees = require('./lib/query');
const addDept = require('./lib/query');
const addRole = require('./lib/query');
const addEmployee = require('./lib/query');
const updateRole = require('./lib/query');*/

// Create connection
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Trebek22!',
        database: 'company_db'
    },
    console.log('Connected to the company_db database.')
);

// Function containing initial inquirer prompt question and switch statements
const init = function () {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'menu',
                choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
            }
        ])
        .then((answer) => {
            switch (answer.menu) {
                case 'view all departments':
                    viewDepts();
                    break;
                case 'view all roles':
                    viewRoles();
                    break;
                case 'view all employees':
                    viewEmployees();
                    break;
                case 'add a department':
                    inquirer.prompt([
                        {
                            type: 'input',
                            message: 'What is the name of the new department?',
                            name: 'newdept',
                        }
                    ]).then(addDept());
                    break;
                case 'add a role':
                    inquirer.prompt([
                        {
                            type: 'input',
                            message: 'What is the name of the new role?',
                            name: 'newrole',
                        }
                    ]).then(addRole());
                    break;
                case 'add an employee':
                    inquirer.prompt([
                        {
                            type: 'input',
                            message: "What is the employee's first name?'",
                            name: 'firstname',
                        },
                        {
                            type: 'input',
                            message: "What is the employee's last name?",
                            name: 'lastname',
                        },
                        {
                            type: 'list',
                            message: "What is the employee's role?",
                            name: 'pickrole',
                            choices: ['VP of Sales', 'Sales Team', 'Chief Financial Officer', 'Accountant', 'Chief Legal Officer', 'Legal Team', 'VP of HR', 'HR Liaison'],
                        },
                        {
                            type: 'list',
                            message: "Who is the employee's manager?",
                            name: 'pickmanager',
                            choices: ['Kirk Hagglund', 'Sanaria Clarke', 'Sal Hobbi', 'Mark Alfano'],
                        }
                    ]).then(addEmployee());
                    break;
                case 'update an employee role':
                    inquirer.prompt([
                        {
                            type: 'list',
                            message: "What is the employee's name?",
                            name: 'rolename',
                            choices: ['Kirk Hagglund', 'Sanaria Clarke', 'Sal Hobbi', 'Mark Alfano', 'Stephen Fudge', 'Mark Elliot', 'Mario Repas', 'Taddeo Costanzo', 'Sarah Pascual'],
                        },
                        {
                            type: 'list',
                            message: "What is the employee's new role?",
                            name: 'updaterole',
                            choices: ['VP of Sales', 'Sales Team', 'Chief Financial Officer', 'Accountant', 'Chief Legal Officer', 'Legal Team', 'VP of HR', 'HR Liaison'],
                        }
                    ]).then(updateRole());
                    break;
            };
        });
};

// Function call to initialize app
init();

module.exports = init;