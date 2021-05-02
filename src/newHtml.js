const makeManagerCards = (data) => {
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
    `
    <div class="col-md-6 col-lg-4 item">
    <h3 class="name"></h3>
    <p class="title">Intern</p>
    <p class="description">EmployeeID${id}</p>
    <p class="description">Email:${email}</p>
    <p class="description">School:${school}</p>
    </div>
    `
};

const generateBody = () => {
`
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Organization</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="team-boxed">
        <div class="container">
            <div class="intro">
                <h2 class="text-center">Team </h2>
                <p class="text-center">Here is a look at our team!</p>
            </div>
            <div class="row people">
                ${managerCard}
                ${engineerCard}
                ${internCard}
            </div>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
</body>
</html>
`
};
module.export = {makeEngineerCard, makeInternCard, makeManagerCards, generateBody};