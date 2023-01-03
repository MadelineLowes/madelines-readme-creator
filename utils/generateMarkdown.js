// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return '';
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
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") {
    return '';
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
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    return `This project is covered by ${license} licensing.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.title}
    ${renderLicenseBadge(data.license)}
  
    ## Description 
    ${data.description}

    ## Table of Contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    * [Tests](#tests)
    * [Quesitons](#questions)
    
    ## Installation 
    ${data.installation}
                
    ## Usage 
    ${data.usage}
                
    ## Credits 
    ${data.credits}
                
    ## License
    ${renderLicenseSection(data.license)}
    ${renderLicenseLink(data.license)}
    
    ## Tests 
    ${data.tests}
    
    ## Questions
    email: ${data.email}
    github profile : https://github.com/${data.username}
    `;
}

module.exports = generateMarkdown;