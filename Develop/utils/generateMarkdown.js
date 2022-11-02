const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // CC--0 License
  if (license == 'CC--0') {
    return `https://creativecommons.org/licenses/by-nd/4.0`
  } 
  // GPL License
  if (license === 'GPL') {
    return `http://perso.crans.org/besson/LICENSE.html`
  } 
  // MIT License
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
DO LATER!!!!!
`;
}

module.exports = generateMarkdown;
