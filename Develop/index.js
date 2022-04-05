// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Please enter your email address.",
    name: "contact",
  },

  {
    type: "input",
    message: "Please enter your GitHub user name.",
    name: "github",
  },
  
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
    message: "How do you install the app?",
    name: "installation",
  },

  {
    type: "input",
    message: "How do you use it?",
    name: "usage",
  },
  {
    type: "input",
    message: "How can other users contribute to this project?",
    name: "contributing",
  },

  {
    type: "input",
    message: "How can users test your app?",
    name: "tests",
  },

  {
    type: "list",
    name: "license",
    message: "Is your projected covered under a license?",
    choices: [
      "Apache",
      "Boost",
      "BSD 3-Clause",
      "BSD 2-Clause",
      "CC0",
      "Eclipse",
      "GNU GPL v3",
      "GNU GPL v2",
      "GNU AGPL v3",
      "GNU LGPL v3",
      "MIT",
      "Mozilla",
      "Unlicense",
      "None",
    ],
  },

  {
    type: "list",
    name: "screenshotConfirm",
    message: "Do you have a screenshot of your application?",
    choices: ["Yes", "No"]
  },

  {
    type: "input",
    name: "screenshot",
    message: "Provide the relative path to your screenshot.",
    when(answers) {
      return answers.screenshotConfirm === "Yes"
    }
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

// TODO: Create a function to write README file
function writeToFile(answers) {
  const readme = generateMarkdown(answers);
  fileName = `${answers.title}_README.md`;
  fs.writeFile(fileName, readme, (err) => {
    if (err) {
      console.error(err);
    }
    console.log("generating README...");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile(answers);
  });
}

// Function call to initialize app
init();
