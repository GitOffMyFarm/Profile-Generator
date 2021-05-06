const Manager = require('./../lib/manager');
const Engineer = require('./../lib/engineer');
const Intern = require('./../lib/intern');
let managers = [];
let engineers = [];
let interns = [];
let managerCard = [];
let engineerCard = [];
let internCard = [];

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
                    ${managerCard.join(' ')}
                    ${engineerCard.join(' ')}
                    ${internCard.join(' ')}
                </div>
            </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>
    `
};
const addManager = (object) => {
    const {name, employeeId, email, officeNumber} = object;
    managers.push(new Manager(name, employeeId, email, officeNumber));
    managerCard.push(
        `
    <div class="col-md-6 col-lg-4 item">
    <h3 class="name">${name}</h3>
    <p class="title">Manager</p>
    <p class="description">EmployeeID${employeeId}</p>
    <p class="description">Email:${email}</p>
    <p class="description">Office Number:${officeNumber}</p>
    </div>
    `
    );
};

const addEngineer = (object) => {
    const {name, employeeId, email, github} = object;
    engineers.push(new Engineer(name, employeeId, email, github));
    engineerCard.push(
        `
    <div class="col-md-6 col-lg-4 item">
    <h3 class="name">${name}</h3>
    <p class="title">Engineer</p>
    <p class="description">EmployeeID${employeeId}</p>
    <p class="description">Email:${email}</p>
    <p class="description">Github:${github}</p>
    </div>
    `
    );
};

const addIntern = (object) => {
    const {name, employeeId, email, school} = object;
    interns.push(new Intern(name, employeeId, email, school));
    internCard.push(
        `
    <div class="col-md-6 col-lg-4 item">
    <h3 class="name">${name}</h3>
    <p class="title">Intern</p>
    <p class="description">EmployeeID${employeeId}</p>
    <p class="description">Email:${email}</p>
    <p class="description">School:${school}</p>
    </div>
    `
    );
};
    
module.exports = {addManager, addEngineer, addIntern, generateBody, managerCard, managers, engineerCard, engineers, internCard, interns};