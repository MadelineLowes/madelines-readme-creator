// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// node library package to read & write to files
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is your project description?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the installation requirements?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What is your projects usage information?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Who were your contributors and references?',
            name: 'credits',
        },
        {
            type: 'input',
            message: 'What are your test instructions?',
            name: 'tests',
        },
        {
            type: 'list', //list has one selection
            message: 'What is your preferred license that the application will be covered under?',
            name: 'license',
            choices: ["None", "MIT", "The Unlicense", "Apache License 2.0", "GNU General Public License v3.0", "BSD 2-Clause Simplified License", "BSD 3-Clause New or Revised License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0"] //list options of licenses
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        }
    ])
    
    // TODO: Create a function to write README file
    .then((data) => 
        // response = data
        fs.writeFile('README.md', generateMarkdown(data), (err) =>
            err ? console.error(err) : console.log("data stored")
        )
    );



// TODO: Create a function to initialize app

function init() { 
    generateMarkdown();
}


// Function call to initialize app
init();
