const firstQuestion = {
    type: 'list',
    message: 'What would you like to log?',
    name: 'employeeType',
    choices: ['Manager', 'Engineer', 'Intern']
};
const managerQuestions = [
    {
        type: 'input',
        message: 'Manager Name',
        name: 'name',
    },
    {
        type: 'number',
        message: 'Employee ID',
        name: 'employeeId'
    },
    {
        type: 'input',
        message: "Manager's E-mail Address",
        name: 'email'
    },
    {
        type: 'number',
        message: "Manager's Office Number",
        name: 'officeNumber'
    }
];
const engineerQuestions = [
    {
        type: 'input',
        message: 'Engineer Name',
        name: 'name',
    },
    {
        type: 'number',
        message: 'Employee ID',
        name: 'employeeId'
    },
    {
        type: 'input',
        message: "Engineer's E-mail Address",
        name: 'email'
    },
    {
        type: 'input',
        message: "Engineer's GitHub Username",
        name: 'github'
    }
];
const internQuestions = [
    {
        type: 'input',
        message: 'Intern Name',
        name: 'name',
    },
    {
        type: 'number',
        message: 'Employee ID',
        name: 'employeeId'
    },
    {
        type: 'input',
        message: "Intern's E-mail Address",
        name: 'email'
    },
    {
        type: 'input',
        message: "Current School",
        name: 'school'
    }
];
