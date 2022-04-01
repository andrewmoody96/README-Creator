// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const userInput = require('../index.js')
  let mdData = `# ${answers.title}
  ---

  ## Description
  
  ${answers.description}
  
  ---
  ## Table of Contents
  
  ${userTOC}
  
  ---
  ## Installation
  
  ${answers.installation}
  
  ---
  ## Usage
  
  ${answers.usage}
  
  ---
  ## License
  
  LICENSE INFO HERE
  
  ---
  ## Contribution
  
  ${answers.contributing}
  
  ---
  ## TESTS
  
  ${answers.tests}
  
  ---
  ## Questions
  
  ${answers.questions}
  
  <br>
  <br>
  
  ---`;
  console.log("")
  return mdData;
}

// Gets this info to the index.
module.exports = generateMarkdown;
