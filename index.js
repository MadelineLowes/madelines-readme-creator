// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// node library package to read & write to files
const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
// const questions = [];

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
        // {
        //     type: 'list', //list has one selection
        //     message: 'Are there installation requirements for your project?',
        //     name: 'contact', //have to change this - look up name options in node
        //     choices: ['yes', 'no']
        // },
        {
            type: 'input',
            message: 'What are the installation requirements?',
            name: 'installation',
        },
        // {
        //     type: 'list', //list has one selection
        //     message: 'Is there usage information required for your project?',
        //     name: 'contact', //have to change this - look up name options in node
        //     choices: ['yes', 'no']
        // },
        {
            type: 'input',
            message: 'What is your projects usage information?',
            name: 'usage',
        },
        // {
        //     type: 'list', //list has one selection
        //     message: 'Did anyone contribute to your project?',
        //     name: 'contact', //have to change this - look up name options in node
        //     choices: ['yes', 'no']
        // },
        {
            type: 'input',
            message: 'Who were your contributors and references?',
            name: 'credits',
        },
        // {
        //     type: 'list', //list has one selection
        //     message: 'Are there test instructions for your project?',
        //     name: 'contact', //have to change this - look up name options in node
        //     choices: ['yes', 'no']
        // },
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
    .then((data) => {
        const readMePageContent = generateReadMe(data);
        fs.writeFile('README.md', readMePageContent, (err) =>
            err ? console.error(err) : console.log("data stored")
        )
    });

    const generateReadMe = ({ title, description, installation, usage, credits, license, tests, username, email }) => {

    // TODO: Create a function that returns the license link
    // If there is no license, return an empty string
    function renderLicenseLink(license) {
        if (license === "none") {
            return ""
        } else if (license === "MIT") {
            var details = "https://opensource.org/licenses/MIT"
            return details;
        } else if (license === "Apache License 2.0") {
            var details = "https://opensource.org/licenses/Apache-2.0"
            return details;
        } else if (license === "GNU General Public License v3.0") {
            var details = "https://www.gnu.org/licenses/gpl-3.0"
            return details;
        } else if (license === "BSD 2-Clause Simplified License") {
            var details = "https://opensource.org/licenses/BSD-2-Clause"
            return details;
        } else if (license === "Boost Software License 1.0") {
            var details = "https://www.boost.org/LICENSE_1_0.txt"
            return details;
        } else if (license === "Creative Commons Zero v1.0 Universal") {
            var details = "http://creativecommons.org/publicdomain/zero/1.0/"
            return details;
        } else if (license === "Eclipse Public License 2.0") {
            var details = "https://opensource.org/licenses/EPL-1.0"
            return details;
        } else if (license === "GNU Affero General Public License v3.0") {
            var details = "https://www.gnu.org/licenses/agpl-3.0"
            return details;
        } else if (license === "GNU General Public License v2.0") { 
            var details = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
            return details;
        } else if (license === "GNU Lesser General Public License v2.1") {
            var details = "https://www.gnu.org/licenses/lgpl-2.1"
            return details;
        } else if (license === "Mozilla Public License 2.0") {
            var details = "https://opensource.org/licenses/MPL-2.0"
            return details;
        } else {
            return console.log("error :( ");
        }
    }

    function renderLicenseBadge(license) {
        if (license === "none") {
            // it specifies in readme what to do with this
            // either return OR badge = error & details = error
            console.log("user selected none")
        } else if (license === "MIT") {
            var badge = "https://img.shields.io/badge/License-MIT-yellow.svg";
            return badge;
        } else if (license === "Apache License 2.0") {
            var badge = "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
            return badge;
        } else if (license === "GNU General Public License v3.0") {
            var badge = "https://img.shields.io/badge/License-GPLv3-blue.svg"
            return badge;
        } else if (license === "BSD 2-Clause Simplified License") {
            var badge = "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg"
            return badge;
        } else if (license === "Boost Software License 1.0") {
            var badge = "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg"
            return badge;
        } else if (license === "Creative Commons Zero v1.0 Universal") {
            var badge = "https://licensebuttons.net/l/zero/1.0/80x15.png"
            return badge;
        } else if (license === "Eclipse Public License 2.0") {
            var badge = "https://img.shields.io/badge/License-EPL_1.0-red.svg"
            return badge;
        } else if (license === "GNU Affero General Public License v3.0") {
            var badge = "https://img.shields.io/badge/License-AGPL_v3-blue.svg"
            return badge;
        } else if (license === "GNU General Public License v2.0") { 
            var badge = "https://img.shields.io/badge/License-GPL_v2-blue.svg"
            return badge;
        } else if (license === "GNU Lesser General Public License v2.1") {
            var badge = "https://img.shields.io/badge/License-LGPL_2.1-blue.svg"
            return badge;
        } else if (license === "Mozilla Public License 2.0") {
            var badge = "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg"
            return badge;
        } else {
            return console.log("error :( ");
        }
    }

    function renderLicenseSection(detailsURL) {
        fetch(detailsURL).then((resp) => resp.text()).then(data => {
            // Optional, replace the H1 heading with nothing,
            // as I do not need it on my static website
            data = data.replace(/<h1>(.*?)<\/h1>/ig, "");

            // Initialize the document parser
            const parser = new DOMParser();
            let doc = parser.parseFromString(data, 'text/html');

            // Get the <body> element content
            let body = doc.querySelector('body').innerHTML;
            console.log(body);
            return body;
            // Replace my empty element with the retrieved content
            // document.querySelector('.changelog').innerHTML = body;
        });
    }

    console.log(title);

        renderLicenseBadge(license);
        renderLicenseLink(license);
        // console.log(license);
        // console.log(renderLicenseLink(license));
        // console.log(renderLicenseBadge(license));
        // adding image element and src that we obtained from renderLicenseBadge()
        badgeURL = renderLicenseBadge(license)
        // var badge = document.createElement("img");
        // badge.setAttribute("src", badgeURL);

        // setting url from renderLicenseLink to variable, which will be an attribute when renderLicenseSection() is called
        detailsURL = renderLicenseLink(license);
        // renderLicenseSection(detailsURL);
        // console.log(renderLicenseSection(detailsURL));
        // details = renderLicenseSection(detailsURL);

// for table of contents, could I create button elements with anchors to their sections as variables and then in the return section, just put

function tableOfContents() {
    $('<a/>')
    .text("Installation")
    .click(function () { 
        attr("href", "#installation")
    });

    $('<a/>')
    .text("Usage")
    .click(function () { 
        attr("href", "#usage")
    });

    $('<a/>')
    .text("Credits")
    .click(function () { 
        attr("href", "#credits")
    });
    
    $('<a/>')
    .text("License")
    .click(function () { 
        attr("href", "#license")
    });
}

const inst = (installation) => {
    installation.attr("id", "installation")
}
const use = (usage) => {
    usage.attr("id", "usage")
}    

const cred = (credits) => {
    credits.attr("id", "credits")
}  

const lic = (license) => {
    license.attr("id", "license")
}  

return `
## Title
${title}
${badgeURL}

## Description 
${description}
            
## Table of Contents (Optional)
${tableOfContents}

## Installation 
${inst}
            
## Usage 
${use}
            
## Credits 
${cred}
            
## License
${lic}
${detailsURL}

## Contact Me & How to Contribute 
email: ${email}
github profile : https://github.com/${username}

## Tests 
${tests}
`
}

//i removed "feature(s)" from the return because I didn't have that as a prompt

    
    // ## Title
    // ## Description 
    // ## Table of Contents (Optional)
    //  /n${data.installation}${data.usage}${data.credits}${data.license}/n
    // ## Installation 
    // ## Usage 
    // ## Credits 
    // ## License
    // ## Badges 
    // ## Features 
    // ## Contact Me & How to Contribute 
    // ## Tests 
    

// TODO: Create a function to initialize app

// function init() { 
//     // generateMarkdown();
// }


// Function call to initialize app
// init();
