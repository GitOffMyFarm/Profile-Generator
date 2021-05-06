const html = require('./src/newHtml');
const objects = require('./src/inquirerObjects');
const fs = require('fs');
const inquirer = require('inquirer');

const chooseAction = (object, data) => {
    switch (object) {
        case 'Manager':
            action = html.addManager(data);
            break;
        case 'Engineer':
            action = html.addEngineer(data);
            break;
        case 'Intern':
            action = html.addIntern(data);
            break;
    };
    return action;
};

const writeFile = () => {
    fs.writeFile(
        `team.html`, html.generateBody(),
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
                    console.log(html.managers);
                    console.log(html.engineers);
                    console.log(html.interns);
                }
            })
        }
        )
    })
};
init();