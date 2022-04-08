// TODO: Create a function that text:s a license badge based on which license is passed in
// If there is no license, text: an empty string
function renderLicenseBadge(answers) {
  switch (answers.license) {
    case "Apache":
      response =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Boost":
      response =
        "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "BSD 3-Clause":
      response =
        "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "BSD 2-Clause":
      response =
        "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case "CC0":
      response =
        "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case "Eclipse":
      response =
        "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
    case "GNU GPL v3":
      response =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "GNU GPL v2":
      response =
        "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    case "GNU AGPL v3":
      response =
        "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
      break;
    case "GNU LGPL v3":
      response =
        "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
      break;
    case "MIT":
      response =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla":
      response =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Unlicense":
      response =
        "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;
    case "None":
      response = "";
      break;
  }
  return response;
}

// TODO: Create a function that text:s the license link
// If there is no license, text: an empty string
function renderLicenseLink(answers) {
  switch (answers.license) {
    case "Apache":
      response =
        "[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Boost":
      response =
        "[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "BSD 3-Clause":
      response = "[BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "BSD 2-Clause":
      response = "[BSD 2-Clause](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case "CC0":
      response =
        "[CC0](https://creativecommons.org/publicdomain/zero/1.0/legalcode)";
      break;
    case "Eclipse":
      response = "[Eclipse](https://www.eclipse.org/legal/epl-2.0/)";
      break;
    case "GNU GPL v3":
      response = "[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    // UPDATE LINK
    case "GNU GPL v2":
      response =
        "[GNU GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0)";
      break;
    case "GNU AGPL v3":
      response = "[GNU AGPLv3](https://www.gnu.org/licenses/agpl-3.0)";
      break;
    case "GNU LGPL v3":
      response = "[GNU LGPLv3](https://www.gnu.org/licenses/lgpl-3.0)";
      break;
    case "MIT":
      response = "[MIT License](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla":
      response =
        "[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Unlicense":
      response = "[The Unlicense](http://unlicense.org/)";
      break;
    case "None":
      response = "No License";
      break;
  }
  return response;
}

// TODO: Create a function that text:s the license section of README
// If there is no license, text: an empty string
function renderLicenseSection(answers) {
  return `<br>
  #### License
  ${renderLicenseBadge(answers)}
  <br>
  ${renderLicenseLink(answers)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  licenseBadge = renderLicenseBadge(answers);
  renderLicenseLink(answers);
  let license = renderLicenseSection(answers);
  let readme = `# ${answers.title} <br> ${licenseBadge}
---

## Description

${answers.description}

---
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)
- [License](#license)

---
## Installation

${answers.installation}

---
## Usage

${answers.usage}

![Screenshot](${answers.screenshot})

---
## Contributing

${answers.contributing}

---
## Testing

${answers.tests}

---
## Questions

If you have any questions, please send an email to <${answers.contact}>, or check out my [GitHub](https://github.com/${answers.github}).

---
### Copyright ${answers.year}, ${answers.name}`;
  let readmeNoPic = `# ${answers.title} <br> ${licenseBadge}
---

## Description

${answers.description}

---
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)
- [License](#license)

---
## Installation

${answers.installation}

---
## Usage

${answers.usage}

---
## Contributing

${answers.contributing}

---
## Testing

${answers.tests}

---
## Questions

If you have any questions, please send an email to <${answers.contact}>, or check out my [GitHub](https://github.com/${answers.github}).

---
### Copyright ${answers.year}, ${answers.name}`;

  if(answers.screenshotConfirm === 'Yes'){
    readme += license;
    return readme;
  } else{
    readmeNoPic += license;
    return readmeNoPic;
  }



}

// Gets this info to the index.
module.exports = generateMarkdown;
