# ReadMe Creator

[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![github][github-shield]][github-url]

## Description

This application is build using Node.js and runs in the command-line. It is intended to be used for employers to input information about their teams to help display a summary of each employee. Once the information has been inputted - using inquirer in the terminal - an HTML file will automattically be created, which will be styled when it's opened in the browser.

This is an application that runs in the terminal using Node.js to allow users to create a high quality ReadMe file for their own application more easily and efficiently. The user is prompted for information about their application like thier project title, description, installation instructions, etc. and once the user has completed their responses, the ReadMe file is created and populated with their inputted project information.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

This application does not run in the browser and so the user will have to clone the code from GitHub and then using an application, such as Visual Studio Code or Git, the user will need to type in the terminal "npm init -y", and then "npm install". The application should now be ready to use.

View the video walkthrough download attached below. Steps: follow the link below to my GitHub repository, click the green button labelled "code" and copy the link using SSH key or HTTPS. In an application like VS Code, open your terminal and type "git clone the-link-you-copied", then enter the cloned folder display-my-team. In the terminal again, type "npm init -y". You should now be ready to begin using my application.

## Usage

To begin using the application, the user must open the application that has been installed from GitHub, following the instructions in the "installation" section above. Then, they must open an integrated terminal and type "node index.js". Prompts will appear in the terminal for the user to answer. Once the prompts have been completed, the user will see a file called "README.md" appear in the same folder as the application that has been downloaded from GitHub. They can then copy this to their own application for use.

Once the application has been installed, you can continue following the video walkthrough download attached above in the installation section. In your terminal, type "npm start" to trigger the prompts. Answer the questions by typing y/n for yes or no, use your up and down key arrows to move through lists, and type when you are prompted to do so. When you no longer wish to add anymore employees to your team, you will be notified that an HTML file has successfully been created. You can view this file code by clicking on the new file or view the styled cards by opening it in your browser.

See the screen recording below to see how this application can be used in VS Code:
https://drive.google.com/file/d/1-toDyYAD1rH8j54r3Jg5gGW_nUe5gK0A/view

## Credits

- https://www.npmjs.com/package/inquirer
- https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide

## License

This project is covered by MIT licensing.
https://opensource.org/licenses/MIT

## Tests

If you are interested in testing the code before proceeding with the application, please follow these steps: in your terminal, type "npm install --jest", and wait until all of the processes have completed successfully before typing "npm test". This should to ensure all of the files are functioning properly - you'll be notified of the status of the tests.

## Questions

Madeline Lowes:

- email: madeline.lowes@gmail.com
- github profile: https://github.com/MadelineLowes

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/MadelineLowes/madelines-readme-creator.svg?style=for-the-badge
[contributors-url]: https://github.com/MadelineLowes/madelines-readme-creator/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/MadelineLowes/madelines-readme-creator.svg?style=for-the-badge
[issues-url]: https://github.com/MadelineLowes/madelines-readme-creator/issues
[license-shield]: https://img.shields.io/github/license/MadelineLowes/madelines-readme-creator.svg?style=for-the-badge
[license-url]: https://github.com/MadelineLowes/madelines-readme-creator/blob/main/LICENSE
[github-shield]: https://img.shields.io/badge/-github-black.svg?style=for-the-badge&logo=github&colorB=555
[github-url]: https://github.com/MadelineLowes/madelines-readme-creator