// TODO: Include packages needed for this application
var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// TODO: Create an array of questions for user input
const questions = ['Title: What is the title of your application?', 'Description: Please describe your application.', 'Installation: How do you install the application', 'Usage: How do you use it?', 'Contributing: How can other users contribute to this project?', 'Tests: How can users test your application?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
