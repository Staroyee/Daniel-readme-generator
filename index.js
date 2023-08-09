const inquirer = require('inquirer');
const fs = require('fs');

const myReadme = (data) => `
# ${data.title}

## Badges
${generateLicense(data.license)}

## Description
${data.desc}

## Table of Contents


## Installation
${data.install}

## Usage
${data.usage}

## Credits
${data.credits}

## How to Contribute
${data.contribute}

## Tests
${data.test}

## Questions
### GitHub
https://github.com/${data.gitHub}

### Email
${data.email}

### Other


## License

`;

function generateLicense(license) {
    if (license === "MIT") {
        const mit = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        return mit;
        
    } else if (license === "APACHE-2.0") {
        const apache = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        return apache;

    } else if (license === "BOOST_1.0") {
        const boost = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
        return boost;

    } else if (license === "MPL-2.0") {
        const mpl = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
        return mpl;
    } else {
        const noLicense = `No License`;
        return noLicense;
    }
};

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
        choices: ['APACHE-2.0', 'MIT', 'BOOST_1.0', 'MPL-2.0', 'No license'],
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
    fs.writeFile('./output/README.md', readmeContent, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
  });
