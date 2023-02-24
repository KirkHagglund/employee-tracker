// File to hold separate query functions for each inquirer prompt option.
// These functions will have to work as promises to complete the query and then return to the inquirer prompt. 
// Functions that require user input will need to first open up a new inquirer prompt to receive values to pass into queries.

// Import and assignment section
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

// View all departments
const viewDepts = function () {
    db.query('SELECT dept_name AS Department, id AS "Department ID FROM department', (err, results) => {
        console.log(results);
    })
        .then(init());
};

// View all roles
const viewRoles = function () {
    db.query('SELECT title AS "Job Title", id AS "Role ID", department_id AS ${}, salary AS Salary FROM role_', (err, results) => {
        console.log(results);
    })
        .then(init());
};

// View all employees
const viewEmployees = function () {
    db.query('SELECT ', (err, results) => {
        console.log(results);
    })
        .then(init());
};

// Add a department
const addDept = function () {
    db.query('INSERT INTO ', variable, (err, result) => {
        console.log('Department Added.');
    })
    .then(init());
};

// Add a role
const addRole = function () {
db.query('INSERT INTO ', variable, (err, result) => {
    console.log('Role Added.');
})
.then(init());
};

//Add an employee
const addEmployee = function () {
db.query('INSERT INTO ', variable, (err, result) => {
    console.log('Employee Added.');
})
.then(init());
};

// Update an employee role
const updateRole = function () {
db.query('', variable, (err, result) => {
    console.log('Role updated');
})
.then(init());
};