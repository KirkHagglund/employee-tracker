// Import and assignment section
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
);

// Function containing initial inquirer prompt question and switch statements
function init() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'menu',
                choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'exit'],
            }
        ])
        .then(console.log('\n'))
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
                    addDept();
                    break;
                case 'add a role':
                    addRole();
                    break;
                case 'add an employee':
                    addEmployee();
                    break;
                case 'update an employee role':
                    updateRole();
                    break;
                case 'exit':
                    process.exit();
            };
        })

};

// Query function section
function viewDepts() {
    db.query('SELECT * FROM department', (err, results) => {
        if (err) {
            console.log(err);
            process.exit();
        }
        console.table(results);
        init();
    });
};

function viewRoles() {
    db.query('SELECT title AS "Title", role_.id AS "ID", salary AS "Salary", dept_name AS "Department" FROM role_ JOIN department ON role_.department_id = department.id', (err, results) => {
        if (err) {
            console.log(err);
            process.exit();
        }
        console.table(results);
        init();
    });
};

function viewEmployees() {
    db.query("SELECT employee.id AS ID, concat(first_name,' ', last_name) AS Name, title AS Title, salary AS Salary FROM employee JOIN role_ ON employee.role_id = role_.id", (err, results) => {
        if (err) {
            console.log(err);
            process.exit();
        }
        console.table(results);
        init();
    });
};

function addDept() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the name of the new department?',
                name: 'newdept',
            },
        ]).then((answer) => {
            const newDept = answer.newdept;
            db.query('INSERT INTO department (dept_name) VALUES (?)', newDept, (err) => {
                if (err) {
                    console.log(err);
                    process.exit();
                }
                console.log('New Department added.');
                init()
            })
        }
        )
};

function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the new role?',
            name: 'newrole',
        },
        {
            type: 'number',
            message: 'What is the salary of the new role?',
            name: 'newsalary',
        },
        {
            type: 'list',
            message: 'What is the department of the new role?',
            name: 'roledept',
            choices: ['Sales', 'Finance', 'Legal', 'Human Resources'],
        },
    ]).then((answer) => {
        let dept;
        if (answer.roledept === 'Sales') {
            dept = 1
        }
        else if (answer.roledept === 'Finance') {
            dept = 2;
        }
        else if (answer.roledept === 'Legal') {
            dept = 3;
        }
        else {
            dept = 4;
        }
        const newRole = answer.newrole;
        const newSalary = answer.newsalary;
        db.query(`INSERT INTO role_ (title, salary, department_id) VALUES ('${newRole}', ${newSalary}, ${dept})`, (err) => {
            if (err) {
                console.log(err);
                process.exit();
            }
            console.log('New role added.')
            init();
        });
    });
};

function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the employee's first name?",
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
                choices: ['Sales Team', 'Accountant', 'Legal Team', 'HR Liaison'],
            },
        ]).then((answer) => {
            const firstName = answer.firstname;
            const lastName = answer.lastname;
            let roleId;
            if (answer.pickrole === 'Sales Team') {
                roleId = 2;
            }
            else if (answer.pickrole === 'Accountant') {
                roleId = 4;
            }
            else if (answer.pickrole === 'Legal Team') {
                roleId = 6;
            }
            else {
                roleId = 8;
            }
            let managerId;
            if (answer.pickrole === 'Sales Team') {
                managerId = 1;
            }
            else if (answer.pickrole === 'Accountant') {
                managerId = 2;
            }
            else if (answer.pickrole === 'Legal Team') {
                managerId = 3;
            }
            else {
                managerId = 4;
            }
    db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${firstName}', '${lastName}', ${roleId}, ${managerId})`, (err) => {
        if (err) {
            console.log(err);
            process.exit();
        }
        console.log('New employee added.');
        init();
    });
});
};

function updateRole() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: "What is the employee's name?",
                name: 'rolename',
                choices: ['Stephen Fudge', 'Mark Elliot', 'Mario Repas', 'Taddeo Costanzo', 'Sarah Pascual'],
            },
            {
                type: 'list',
                message: "What is the employee's new role?",
                name: 'updaterole',
                choices: ['Sales Team', 'Accountant', 'Legal Team', 'HR Liaison'],
            }
        ]).then((answer) => {
            let empId;
            if (answer.rolename === 'Stephen Fudge') {
                empId = 5;
            }
            else if (answer.rolename === 'Mark Elliot') {
                empId = 6;
            }
            else if (answer.rolename === 'Mario Repas') {
                empId = 7;
            }
            else if (answer.rolename === 'Taddeo Costanzo') {
                empId = 8;
            }
            else {
                empId = 9;
            }
            let roleId;
            if (answer.updaterole === 'Sales Team') {
                roleId = 2;
            }
            else if (answer.updaterole === 'Accountant') {
                roleId = 4;
            }
            else if (answer.updaterole === 'Legal Team') {
                roleId = 6;
            }
            else {
                roleId = 8;
            }
            db.query(`UPDATE employee SET role_id = ${roleId} WHERE id = ${empId}`, (err) => {
                if (err) {
                    console.log(err);
                    process.exit();
                }
                console.log('Employee role updated.');
                init();
            });
        });
};

// Function call to initialize app
init();