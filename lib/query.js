// File to hold separate query functions for each inquirer prompt option.
// These functions will have to work as promises to complete the query and then return to the inquirer prompt. 
// Functions that require user input will need to first open up a new inquirer prompt to receive values to pass into queries.

// Import and assignment section
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');
const init = require('../server');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Trebek22!',
        database: 'company_db'
    },
);

// View all departments
function viewDepts () {
    db.query('SELECT dept_name AS Department, id AS "Department ID" FROM department', (err, results) => {
        if (err) {
            console.log(err);
            process.exit();
        }
        console.table(results);
    })
        //.then(init());
};

// View all roles
/*function viewRoles () {
    db.query('SELECT title AS "Job Title", id AS "Role ID", department_id AS ${}, salary AS Salary FROM role_', (err, results) => {
        if (err) {
            console.log(err);
            process.exit();
        }
        console.table(results);
    })
        .then(init());
};

// View all employees
function viewEmployees () {
    db.query('SELECT ', (err, results) => {
        if (err) {
            console.log(err);
            process.exit();
        }
        console.table(results);
    })
        .then(init());
};

// Add a department
function addDept () {
    db.query('INSERT INTO ', variable, (err, result) => {
        if (err) {
            console.log(err);
            process.exit();
        }
        console.log('Department Added.');
    })
    .then(init());
};

// Add a role
function addRole () {
db.query('INSERT INTO ', variable, (err, result) => {
    if (err) {
        console.log(err);
        process.exit();
    }
    console.log('Role Added.');
})
.then(init());
};

//Add an employee
function addEmployee () {
db.query('INSERT INTO ', variable, (err, result) => {
    if (err) {
        console.log(err);
        process.exit();
    }
    console.log('Employee Added.');
})
.then(init());
};

// Update an employee role
function updateRole () {
db.query('', variable, (err, result) => {
    if (err) {
        console.log(err);
        process.exit();
    }
    console.log('Role updated');
})
.then(init());
};*/

module.exports = viewDepts;
/*module.exports = viewRoles;
module.exports = viewEmployees;
module.exports = addDept;
module.exports = addRole;
module.exports = addEmployee;
module.exports = updateRole;*/