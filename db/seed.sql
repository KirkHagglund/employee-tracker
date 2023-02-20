INSERT INTO department (dept_name)
VALUES  ('Sales'),
        ('Finance'),
        ('Legal'),
        ('Human Resources');

        INSERT INTO role_ (title, salary, department_id)
VALUES  ('VP of Sales', 250000, 1),
        ('Sales Team', 100000, 1),
        ('Chief Financial Officer', 350000, 2),
        ('Accountant', 85000, 2),
        ('Chief Legal Officer', 300000, 3),
        ('Legal Team', 200000, 3),
        ('VP of HR', 175000, 4),
        ('HR Liaison', 85000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Kirk', 'Hagglund', 1, NULL),
        ('Sanaria', 'Clarke', 7, NULL),
        ('Sal', 'Hobbi', 3, NULL),
        ('Mark', 'Alfano', 5, NULL),
        ('Stephen', 'Fudge', 6, 4),
        ('Mark', 'Elliot', 4, 3),
        ('Mario', 'Repas', 2, 1),
        ('Taddeo', 'Costanzo', 2, 1),
        ('Sarah', 'Pascual', 8, 2);