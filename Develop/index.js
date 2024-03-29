// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// An array of questions for user input
const questions = [
    {
    type: 'input',
    message: "What is the project's title?",
    name: 'title'
    },
    {
    type: 'input',
    message: "Please provide a short description of the project.",
    name: 'description'
    },
    {
    type: 'input',
    message: "What are the steps required to install your project?",
    name: 'install'
    },
    {
    type: 'input',
    message: "How is the project used?",
    name: 'usage'
    },
    {
    type: 'input',
    message: "What is your GitHub Username?",
    name: 'github'
    },
    {
    type: 'input',
    message: "What is your email address?",
    name: 'email'
    },
    {
    type: 'input',
    message: "Who all collaborated on this project?",
    name: 'collaborate'
    },
    {
    type: 'list',
    message: "What kind of license does the project need?",
    name: 'license',
    choices: ['Apache', 'Boost', 'BSD', 'Eclipse', 'GNU', 'MIT', 'Mozilla', 'None', 'Unlicense']
    },
    {
    type: 'input',
    message: "What features does the project have?",
    name: 'features'
    },
    {
    type: 'input',
    message: "How can you contribute to the project?",
    name: 'contribution'
    },
    {
    type: 'input',
    message: "What tests can are used in the project?",
    name: 'tests'
    },
];

// A function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('README successfully generated!')
    )
}

// A function to initialize app
function init() {
    const generateREADME = ({ title, description, install, usage, screenshot, github, email, collaborate, license, features, contribution, tests}) =>
    `# ${title}

![Badge](https://img.shields.io/badge/license-${license}-blue)

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How to contribue](#howtocontribute)
- [Tests](#tests)

## Installation
${install}

## Usage
${usage}
![screenshot](/assets/screenshot.PNG)

## Credits
GitHub: [${github}](https://github.com/${github})
Email: ${email}
Collaborators: ${collaborate}

## License

This project license is ${license}

## Features
${features}

## How to Contribute
${contribution}

## Tests
${tests}

## Questions
If you have any questions please email me at ${email}
`;
    inquirer
        .prompt([...questions])
        .then((answers) => {
            writeToFile('../genREADME.md', generateREADME(answers));
}
)


}


// Function call to initialize app
init();
