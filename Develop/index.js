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

  {
    type: "input",
    message: "Usage: How do you use it?",
    name: "usage",
  },
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
    message: "Contact: Provide a contact email for user questions.",
    name: "contact",
  },

  {
    type: "list",
    name: "license",
    message: "License: Is your projected covered under a license?",
    choices: [
      "Apache",
      "Boost",
      "BSD 3-Clause",
      "BSD 2-Clause",
      "Creative Commons 0",
      "Eclipse",
      "GNU GPL v3",
      "GNU GPL v2",
      "GNU AGPL v3",
      "GNU LGPL v3",
      "MIT",
      "Mozilla",
      "Unlicense",
      "None"
    ],
  },

  {
    type: "input",
    name: "year",
    message: "Copyright Year: Enter the project's copyright year.",
  },

  {
    type: "input",
    name: "name",
    message: "Enter the copyright holder's name.",
  },
];

// Pass the answer text into the next portion of the application.

// TODO: Create a function to write README file

// Currently generates a README with answers.
// to-do:
// 1. Add ToC
// 2. Add License Info
function writeToFile(answers) {
  console.log("Made it...")
  const readme = generateMarkdown(answers);
  fileName = `${answers.title}_README.md`
  fs.writeFile(fileName, readme, (err) => {
    if (err) {
      console.error(err);
    }
    console.log("generating README...")
  })  
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile(answers);
    console.log(answers);
  });
}

// Function call to initialize app
init();
