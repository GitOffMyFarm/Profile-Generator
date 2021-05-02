const makeManagerCard = (data) => {
    const {name, id, email, officeNumber} = data
    return  `
    <div class="col-md-6 col-lg-4 item">
    <h3 class="name">${name}</h3>
    <p class="title">Manager</p>
    <p class="description">EmployeeID${id}</p>
    <p class="description">Email:${email}</p>
    <p class="description">Office Number:${officeNumber}</p>
    </div>
    `
};

const makeEngineerCard = (data) => {
    const {name, id, email, github} = data
    return `
    <div class="col-md-6 col-lg-4 item">
    <h3 class="name">${name}</h3>
    <p class="title">Engineer</p>
    <p class="description">EmployeeID${id}</p>
    <p class="description">Email:${email}</p>
    <p class="description">Github:${github}</p>
    </div>
    `
};

const makeInternCard = (data) => {
    const {name, id, email, school} = data
    return `
    <div class="col-md-6 col-lg-4 item">
    <h3 class="name">${name}</h3>
    <p class="title">Intern</p>
    <p class="description">EmployeeID${id}</p>
    <p class="description">Email:${email}</p>
    <p class="description">School:${school}</p>
    </div>
    `
};
module.exports = {makeEngineerCard, makeInternCard, makeManagerCard,};