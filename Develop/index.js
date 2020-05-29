const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },

        {
            type: "input",
            message: "Description of project.",
            name: "description"
        },

        {
            type: "input",
            message: "Usage",
            name: "usage"
        },

        {
            type: "input",
            message: "License",
            name: "license"
        },

        {
            type: "input",
            message: "What did you contribute?",
            name: "contributing"
        },

        {
            type: "input",
            message: "Tests",
            name: "tests"
        },

        {
            type: "input",
            message: "Do you have any questions?",
            name: "Questions"
        },
        {
            type: "input",
            message: "Enter your GitHub username:",
            name: "username"
        },

    ]);

}



function generatemd(answers) {
    return `

            # ${answers.title} 

    
            [![Badge](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)
             ![Badge](https://img.shields.io/badge/ReadMe${answers.userTitle}-${answers.version}-${answers.badgeColor})
            # ${answers.userTitle}
            
           
            ## Description
            ${answers.description}

            ###Table of Contents
                * Installation
                * Current Version 
                * License
                * Contributing
                * User GitHub profile picture
                * User GitHub email
            
            ## Installation
            ${answers.install}

            ## Usage
            ${answers.usage}

            ## License
            ${answers.license}

            ## Contribution
            ${answers.contributing}

            ## Tests
            ${answers.tests}

            ## Questions
            ${answers.questions} `;


}


async function init() {

    try {
        const answers = await promptUser();

        const md = generatemd(answers);

        await writeFileAsync("README.md", md);

        console.log("Successfully wrote to README.md");
    } catch (err) {
        console.log(err);
    }
}

init();



// .then(function ({ answers }) {
//     const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

//     axios.get(queryUrl).then(function (res) {
//         const repoNames = res.data.map(function (repo) {
//             return repo.name;
//         });

//         const repoNamesStr = repoNames.join("\n");

//         console.log(`Saved ${repoNames.length} repos`);
//     });

// });






// inquirer
//     .prompt({
//         message: "Enter your GitHub username:",
//         name: "username"
//     })
//     .then(function ({ username }) {
//         const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

//         axios.get(queryUrl).then(function (res) {
//             const repoNames = res.data.map(function (repo) {
//                 return repo.name;
//             });

//             const repoNamesStr = repoNames.join("\n");

//             fs.writeFile("repos.txt", repoNamesStr, function (err) {
//                 if (err) {
//                     throw err;
//                 }

//                 console.log(`Saved ${repoNames.length} repos`);
//             });
//         });
//     });



