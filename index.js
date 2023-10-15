const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'How would you describe your project?',
        name: 'description',
    },
    //Include all your other question objects here 
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = `
# ${answers.title}

## Description
${answers.description}

/* Include all your other sections here */
        `;

        writeToFile("README.md", readmeContent);
    });
}

// Function call to initialize app
init();
