const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const html = require('./src/newHtml');
const objects = require('./src/inquirerObjects');
const fs = require('fs');
const inquirer = require('inquirer');
let managerCard = [];
let engineerCard = [];
let internCard = [];

const addManager = (object) => {
    const {name, employeeId, email, officeNumber} = object;
    managerCard.push(new Manager(name, employeeId, email, officeNumber));
};

const addEngineer = (object) => {
    const {name, employeeId, email, github} = object;
    engineerCard.push(new Engineer(name, employeeId, email, github));
};

const addIntern = (object) => {
    const {name, employeeId, email, school} = object;
    internCard.push(new Intern(name, employeeId, email, school));
};

const writtenManagerCards = () => {
    for (i = 0; i < managerCard.length; i++) {
       return html.makeManagerCard(managerCard[i]);
    }
};

const writtenEngineerCards = () => {
    for (i = 0; i < engineerCard.length; i++) {
       return html.makeEngineerCard(engineerCard[i]);
    }
};

const writtenInternCards = () => {
    for (i = 0; i < internCard.length; i++) {
       return html.makeInternCard(internCard[i]);
    }
};

const chooseAction = (object, data) => {
    switch (object) {
        case 'Manager':
            action = addManager(data);
            break;
        case 'Engineer':
            action = addEngineer(data);
            break;
        case 'Intern':
            action = addIntern(data);
            break;
    };
    return action;
};

const generateBody = () => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Organization</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="./dist/style.css">
    </head>
    <body>
        <div class="team-boxed">
            <div class="container">
                <div class="intro">
                    <h2 class="text-center">Team </h2>
                    <p class="text-center">Here is a look at our team!</p>
                </div>
                <div class="row people">
                    ${writtenManagerCards()}
                    ${writtenEngineerCards()}
                    ${writtenInternCards()}
                </div>
            </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>
    `
    };

const writeFile = () => {
    fs.writeFile(
        `team.html`, generateBody(),
(err) => err ? console.error(err) : console.log('Response Recorded!')
        )
};

const init = () => {
    inquirer
    .prompt(objects.firstQuestion)
    .then(data => {
        inquirer
        .prompt(objects.buildEmployee(data.employeeType))
        .then(info => {
            chooseAction(data.employeeType, info);
            inquirer
            .prompt(objects.lastQuestion)
            .then(answer => {
                decemployeeIder = objects.possibleEnd(answer.lastChoice);
                if (decemployeeIder === true){
                    init();
                }
                else {
                    writeFile();
                }
            })
        }
        )
    })
};
init();