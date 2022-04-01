// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your app?",
    name: "title",
  },
  {
    type: "input",
    message: "Please describe your app.",
    name: "description",
  },
  {
    type: "input",
    message: "Installation: How do you install the app?",
    name: "installation",
  },
  { type: "input", message: "Usage: How do you use it?", name: "usage" },
  {
    type: "input",
    message: "Contributing: How can other users contribute to this project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "Tests: How can users test your app?",
    name: "tests",
  },
  {
    type: "input",
    message: "Questions: How can users ask you about your app?",
    name: "questions",
  },
];

// Pass the answer text into the next portion of the application.

// TODO: Create a function to write README file

// Currently generates a README with a string literal. This string literal is mostly markdown with placeholder input variable names.
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data,(err) => {
      if (err) {
        console.error(err);
      }
      console.log("creating README");
    });
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile(`${answers.title}_README.md`, generateMarkdown(answers));
    console.log(answers); 
  });
};

// Function call to initialize app
init();
