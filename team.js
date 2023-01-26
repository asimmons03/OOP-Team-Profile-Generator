const inquirer = require('inquirer');

inquirer  
    .prompt([
        {
            type: 'input',
            message: "What is the manager's name?",
            name: 'manager'
        },
        {
            type: 'input',
            message: "What is the manager's email?",
            name: 'email'
        },
        {
            type: 'input',
            message: "What is the manager's Employee ID?",
            name: 'identification'
        },
        {
            type: 'input',
            message: "What is the manager's office number?",
            name: 'office'
        },

    ])
    .then((answers) => {
        console.log(answers)
        console.log(answers.manager)
    })
