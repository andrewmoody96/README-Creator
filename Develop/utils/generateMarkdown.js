// TODO: Create a function that text:s a license badge based on which license is passed in
// If there is no license, text: an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

    case "Boost":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";

    case "BSD 3-Clause":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";

    case "BSD 2-Clause":
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";

    case "CC0":
      return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";

    case "CC BY 4":
      return "[![License: CC BY- 4.0](https://img.shields.io/badge/License-CC_BY-_4.0-lightgrey.svg)](https://creativecommons.org/licenses/BY-/4.0/)";

    case "CC BY-SA 4":
      return "[![License: CC BY--SA 4.0](https://img.shields.io/badge/License-CC_BY---SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/BY--sa/4.0/)";

    case "CC BY-NC 4":
      return "[![License: CC BY--NC 4.0](https://img.shields.io/badge/License-CC_BY---NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/BY--nc/4.0/)";

    case "CC BY-ND 4":
      return "[![License: CC BY--ND 4.0](https://img.shields.io/badge/License-CC_BY---ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/BY--nd/4.0/)";

    case "CC BY-NC-SA 4":
      return "[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)";

    case "CC BY-NC-ND 4":
      return "[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)";

    case "Eclipse":
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";

    case "GNU GPL v3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

    case "GNU GPL v2":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";

    case "GNU AGPL v3":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";

    case "GNU LGPL v3":
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";

    case "GNU FDL v1.3":
      return "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)";

    case "The Hippocratic License 2.1":
      return "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)";

    case "The Hippocratic License 3.0:":
      return "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev);";

    case "IBM Public License v1.0":
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";

    case "ISC License (ISC)":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";

    case "The MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT);";

    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0);";

    case "Attribution License (BY)":
      return "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";

    case "Open Database License (ODbL)":
      return "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)";

    case "Public Domain Dedication and License (PDDL)":
      return "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)";

    case "The Perl License":
      return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";

    case "The Artistic License 2.0":
      return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";

    case "SIL Open Font License 1.1":
      return "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";

    case "The Unlicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";

    case "WTFPL":
      return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";

    case "The zlib/libpng License":
      return "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";

    default:
      return "";
  }
}

// TODO: Create a function that text:s the license link
// If there is no license, text: an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that text:s the license section of README
// If there is no license, text: an empty string
function renderLicenseSection(license) {
  const licenses = [
    {
      name: "Apache",
      text: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    },

    {
      name: "Boost",
      text: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    },

    {
      name: "BSD 3-Clause",
      text: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    },

    {
      name: "BSD 2-Clause",
      text: "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    },

    {
      name: "CC0",
      text: "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
    },

    {
      name: "CC BY 4",
      text: "[![License: CC BY- 4.0](https://img.shields.io/badge/License-CC_BY-_4.0-lightgrey.svg)](https://creativecommons.org/licenses/BY-/4.0/)",
    },

    {
      name: "CC BY-SA 4",
      text: "[![License: CC BY--SA 4.0](https://img.shields.io/badge/License-CC_BY---SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/BY--sa/4.0/)",
    },

    {
      name: "CC BY-NC 4",
      text: "[![License: CC BY--NC 4.0](https://img.shields.io/badge/License-CC_BY---NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/BY--nc/4.0/)",
    },

    {
      name: "CC BY-ND 4",
      text: "[![License: CC BY--ND 4.0](https://img.shields.io/badge/License-CC_BY---ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/BY--nd/4.0/)",
    },

    {
      name: "CC BY-NC-SA 4",
      text: "[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)",
    },

    {
      name: "CC BY-NC-ND 4",
      text: "[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)",
    },

    {
      name: "Eclipse",
      text: "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    },

    {
      name: "GNU GPL v3",
      text: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    },

    {
      name: "GNU GPL v2",
      text: "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
    },

    {
      name: "GNU AGPL v3",
      text: "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
    },

    {
      name: "GNU LGPL v3",
      text: "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
    },

    {
      name: "GNU FDL v1.3",
      text: "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)",
    },

    {
      name: "The Hippocratic License 2.1",
      text: "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)",
    },

    {
      name: "The Hippocratic License 3.0:",
      text: "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)",
    },

    {
      name: "IBM Public License v1.0",
      text: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
    },

    {
      name: "ISC License (ISC)",
      text: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    },

    {
      name: "The MIT License",
      text: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    },

    {
      name: "Mozilla Public License 2.0",
      text: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    },

    {
      name: "Attribution License (BY)",
      text: "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)",
    },

    {
      name: "Open Database License (ODbL)",
      text: "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)",
    },

    {
      name: "Public Domain Dedication and License (PDDL)",
      text: "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)",
    },

    {
      name: "The Perl License",
      text: "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
    },

    {
      name: "The Artistic License 2.0",
      text: "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
    },

    {
      name: "SIL Open Font License 1.1",
      text: "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
    },

    {
      name: "The Unlicense",
      text: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    },

    {
      name: "WTFPL",
      text: "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
    },

    {
      name: "The zlib/libpng License",
      text: "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
    },
  ];

  switch (license) {
    case "Apache":
      return licenses[0].text;

    case "Boost":
      return licenses[1].text;

    case "BSD 3-Clause":
      return licenses[2].text;

    case "BSD 2-Clause":
      return licenses[3].text;

    case "CC0":
      return licenses[4].text;

    case "CC BY 4":
      return licenses[5].text;

    case "CC BY-SA 4":
      return licenses[6].text;

    case "CC BY-NC 4":
      return licenses[7].text;

    case "CC BY-ND 4":
      return licenses[8].text;

    case "CC BY-NC-SA 4":
      return licenses[9].text;

    case "CC BY-NC-ND 4":
      return licenses[10].text;

    case "Eclipse":
      return licenses[11].text;

    case "GNU GPL v3":
      return licenses[12].text;

    case "GNU GPL v2":
      return licenses[13].text;

    case "GNU AGPL v3":
      return licenses[14].text;

    case "GNU LGPL v3":
      return licenses[15].text;

    case "GNU FDL v1.3":
      return licenses[16].text;

    case "The Hippocratic License 2.1":
      return licenses[17].text;

    case "The Hippocratic License 3.0:":
      return licenses[18].text;

    case "IBM Public License v1.0":
      return licenses[19].text;

    case "ISC License (ISC)":
      return licenses[20].text;

    case "The MIT License":
      return licenses[21].text;

    case "Mozilla Public License 2.0":
      return licenses[22].text;

    case "Attribution License (BY)":
      return licenses[23].text;

    case "Open Database License (ODbL)":
      return licenses[24].text;

    case "Public Domain Dedication and License (PDDL)":
      return licenses[25].text;

    case "The Perl License":
      return licenses[26].text;

    case "The Artistic License 2.0":
      return licenses[27].text;

    case "SIL Open Font License 1.1":
      return licenses[28].text;

    case "The Unlicense":
      return licenses[29].text;

    case "WTFPL":
      return licenses[30].text;

    case "The zlib/libpng License":
      return licenses[31].text;

    default:
      return licenses[32].text;
  }
}

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
  console.log(mdData);
  text: mdData;
}

// Gets this info to the index.
module.exports = generateMarkdown;
