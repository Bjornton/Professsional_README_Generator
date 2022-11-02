// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = () => {
    // User's name
    return inquirer.prompt([
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
    // User's github
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
    // User's email address
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
    // User's title of project
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
    // User's description of project
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
    // User's installation procedure of project
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
    // User's instructions to use project
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
    // User's instructions for contributing to project
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter instructions for others to contribute:',
        validate: contributionEntry => {
            if (contributionEntry) {
                return true;
            } else {
                console.log('Please type instructions for other people to contribute.');
                return false;
            }
        }
    },
    // User's details of tests used in project
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
        name: 'licensesEntry',
        message: 'Would you like to include a license for your project?',
        default: false
    },
    // Which license the user would like
    {
        type: 'list',
        name: 'licenses',
        message: 'Which license would you like to include:',
        choices: ['MIT', 'GPL', 'CC--0']
    }
    
]);
}

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve) => {
        fs.writeFile('./dist/README.md', data, err => {
            if (err) {
                console.log(err);
                return
            }
            resolve({
                ok: true,
                message: console.log('README has successfully added.')
            })
        })
    })
}

// TODO: Create a function to initialize app
questions()
// Function call to initialize app
.then(answers => {
    return generateMarkdown(answers);
})
// using data to display on page 
.then(data => {
    return writeToFile(data);
})
// catching errors 
.catch(err => {
    console.log(err)
})
