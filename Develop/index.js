

var fs = require("fs");


var inquirer = require("inquirer");


fs.writeFile("message.md", "", 'utf8', (err) => {
    if (err) throw err;
});



inquirer
    .prompt([
        {
            type: "input",
            message: "What is the name of your title?",
            name: "Title"
        },
        {
            type: "input",
            message: "Please give a breif description of your project.",
            name: "Description"
        },
        {
            type: "input",
            message: "What are the steps required to install your project?",
            name: "Installation"
        }
    ])
    .then(function (response) {
        console.log(response);
        console.log(Object.keys(response))

        // fs.writeFile('message.md', JSON.stringify(response), 'utf8', (err) => {
        //     if (err) throw err;
        // });

        let cuPrompt = Object.keys(response);
        let cuAns = Object.values(response);


        for (let i = 0; i < cuPrompt.length; i++) {

            let stringToAppend = ""

            if (cuPrompt[i] === "Title") {


                stringToAppend = `# ${cuAns[i]}`
            }

            else if (cuPrompt[i] === "Description") {

                stringToAppend = "\n### Description\n" + cuAns[i]




                //



            }




            fs.appendFile('message.md', stringToAppend, 'utf8', (err) => {
                if (err) throw err;
            });







        }

    });




// //const questions = [



// ];

// //function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();





