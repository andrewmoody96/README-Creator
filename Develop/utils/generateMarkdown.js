

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
  let mdData = `# ${data.title}
  ---

  ## Description
  
  ${data.description}
  
  ---
  ## Table of Contents
  
  TABLE OF CONTENTS HERE
  
  ---
  ## Installation
  
  ${data.installation}
  
  ---
  ## Usage
  
  ${data.usage}
  
  ---
  ## License
  
  LICENSE INFO HERE
  
  ---
  ## Contribution
  
  ${data.contributing}
  
  ---
  ## TESTS
  
  ${data.tests}
  
  ---
  ## Questions
  
  ${data.questions}
  
  <br>
  <br>
  
  ---`;
  console.log(mdData)
  return mdData;
}

// Gets this info to the index.
module.exports = generateMarkdown;
