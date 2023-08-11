const inquirer = require('inquirer');
const fs = require('fs');

const myReadme = (data) => `
# ${data.title}

## Badges
${generateLicense(data.license)}

## Description
${data.desc}

## Table of Contents

- [Installation](#Installation)\n
- [Usage](#Usage)\n
- [Credits](#Credits)\n
- [Contributing](#Contributing)\n
- [Tests](#Tests)\n
- [Questions](#Questions)\n
- [License](#License)\n

## Installation
${data.install}

## Usage
${data.usage}

## Contributing
${data.contribute}

## Tests
${data.test}

## Questions
### GitHub
https://github.com/${data.github}

### Email
${data.email}

### Other
${data.questions}

## Credits
${data.credits}

## License
${generateLicenseInfo(data.license)}
`;

function generateLicenseInfo(license) {
    if (license === "MIT") {
        const mit = `This application is covered under the MIT license (https://opensource.org/licenses/Apache-2.0)`;
        return mit;
        
    } else if (license === "APACHE-2.0") {
        const apache = `This application is covered under the Apache-2.0 license (https://opensource.org/licenses/Apache-2.0)`;
        return apache;

    } else if (license === "BOOST_1.0") {
        const boost = `This application is covered under the Boost_1.0 license (https://www.boost.org/LICENSE_1_0.txt)`;
        return boost;

    } else if (license === "MPL-2.0") {
        const mpl = `This application is covered under the Mozilla Public license 2.0 (https://opensource.org/licenses/MPL-2.0)`;
        return mpl;
    } else {
        const noLicense = `No License`;
        return noLicense;
    }
}

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
        message: 'Enter contribution guidelines',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Write test instructions for your application',
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
        message: 'Add additional questions',
        name: 'questions',
    },
    {
        type: 'input',
        message: 'Enter any credits',
        name: 'credits',
    },
  ])
  .then((data) => {
    const readmeContent = myReadme(data);
    fs.writeFile('./output/README.md', readmeContent, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
  });
