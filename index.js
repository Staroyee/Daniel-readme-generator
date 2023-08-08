const inquirer = require('inquirer');
const fs = require('fs');

const myReadme = (data) => ``;

inquirer
  .prompt([
    {
        type: 'input',
        message: 'Enter a project title',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description',
        name: 'desc',
    },
    {
        type: 'input',
        message: 'Enter installation instructions',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Enter usage information',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter any credits',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Enter test instructions',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Choose a license',
        choices: ['Apache 2.0', 'MIT', 'GNU', 'Mozilla 2.0'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Add additional questions on how to reach you',
        name: 'contact',
    },
  ])
  .then((data) => {
    const readmeContent = myReadme(data);
    fs.writeFile('/users/danie/bootcamp/Daniel-readme-generator/output/README.md', readmeContent, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
  });
