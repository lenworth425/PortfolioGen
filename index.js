import inquirer from "inquirer";
import fs from "fs";

inquirer
    .prompt([
        {
        type: "input",
        message: "What is your name?",
        name: "name",
        }, {
        type: "input",
        message: "What is your location?",
        name: "location",
        }, {
        type: "input",
        message: "What is your bio?",
        name: "bio",
        }, {
        type: "input",  
        message: "What is your LinkedIn URL?",
        name: "linkedin",
        }, {
        type: "input",
        message: "What is your GitHub URL?",    
        name: "github",
        },
    ])
    .then((answers) => {
        const userTemplate = fillTemplate(answers);
        writeFile(userTemplate);
    });

    function fillTemplate(answers) {
        return `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="style.css">
                    <title>${answers.name} Portfolio</title>
                </head>
                <style>
                    body { font-family: Arial, sans-serif;
                        background-image: url("https://wallpapers.com/images/hd/faded-background-l4canvrry3go926a.jpg");
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        height: 100vh;
                    }
                    h1 {size: 100px; 
                        color: blue; }
                    section { margin-bottom: 20px;
                        height: 100px;
                        width: 20%;
                        padding: 20px ;
                        border: 1px solid black;
                        border-radius: 10px;
                        background-color: rgba(255, 255, 255, 0.5);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    h2 { color: green; }
                    p { color: red; }
                    a { color: purple; }
                </style>
                <body>
                    <h1>Portfolio</h1>
                    <aside>
                        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="avatar" style="width: 100px; height: 100px; border-radius: 50%;">
                    </aside>
                    <section>
                        <h2>${answers.name}</h2>
                        <p>Location: ${answers.location}</p>
                        <p>${answers.bio}</p>
                    </section>
                    <section>
                        <h2>Links:</h2>
                        <a style="display: block;" href="${answers.github}">Github</a>
                        <a style="display: block;" href="${answers.linkedin}">LinkedIn</a>
                    </section>
                </body>
                </html>`
    }

    function writeFile(data) {
        fs.writeFile("index.html", data, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("File created successfully!");
            }
        });
    }
        