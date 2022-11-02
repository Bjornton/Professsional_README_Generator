// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Hello, this program generates a README. First, enter in your full name: ',
        validate: nameEntry => {
            if (nameEntry) {
                return true;
            } else {
                console.log("Please type in your name.")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter in your GitHub username:',
        validate: gitHubEntry => {
            if (gitHubEntry) {
                return true;
            } else {
                console.log("Please type in your GitHub username.")
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter in your email:',
        validate: emailEntry => {
            if (emailEntry) {
                return true;
            } else {
                console.log("Please type in your email.")
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter in the title of the project:',
        validate: titleEntry => {
            if (titleEntry) {
                return true;
            } else {
                console.log("Please type in the name of your project.")
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter in a description of your project:',
        validate: descriptionEntry => {
            if (descriptionEntry) {
                return true;
            } else {
                console.log("Please type in the description of your project.")
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter in the instructions for installation:',
        validate: installationEntry => {
            if (installationEntry) {
                return true;
            } else {
                console.log('Please type in instructions for installation.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter in the instructions for usage:',
        validate: usageEntry => {
            if (usageEntry) {
                return true;
            } else {
                console.log('Please type in the instructions for usage.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter instructions for others to contribute.',
        validate: contributionEntry => {
            if (contributionEntry) {
                return true;
            } else {
                console.log('Please type instructions for other people to contribute.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please type in details of the tests used in this project:',
        validate: testsEntry => {
            if (testsEntry) {
                return true;
            } else {
                console.log('Please enter details of the tests used.');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLicenses',
        message: 'Would you like to add a license into your project?',
        default: false
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'Which license would you like to include?',
        choices: ['MIT', 'GPL', 'CC--0'],
        when: ({ licesnesEntry }) => {
            if (licesnesEntry) {
                return true;
            } else {
                return false;
            }
        }
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
