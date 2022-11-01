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
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
