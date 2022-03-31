// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");


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
  { type: "input", message: "Usage: How do you use it?", name: "Usage" },
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

// Currently logs the user's answers as JSON object.
// Pass the answer text into the next portion of the application.
const askQuestions = () => {
    inquirer
      .prompt(questions)
      .then((answers) => {
        console.log(answers);
      });
}



// TODO: Create a function to write README file

// Currently generates a README with a string literal. This string literal is mostly markdown with placeholder input variable names.
function writeToFile(fileName, data) {

const content = `# USER TITLE
---

## ${userDescription}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi vitae suscipit tellus mauris.

Arcu dui vivamus arcu felis bibendum ut tristique et. Laoreet suspendisse interdum consectetur libero id faucibus nisl.

---
## ${userTOC}

${userTOC}

---
## Installation

${userInstallation}

---
## Usage

${userUsage}

---
## License

${userLicense}

---
## Contribution

${userContribution}

---
## TESTS

${userTests}

---
## Questions

${userQuestions}

<br>
<br>

---`;

  fs.writeFile(
    "/Users/andrewmoody/Downloads/README-Output/testREADME.md",
    content,
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Saved");

      //file written successfully
    }
  );
}


// TODO: Create a function to initialize app
function init() {
    askQuestions();
    // writeToFile();

}

// Function call to initialize app
init();
