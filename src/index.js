#!/usr/bin/env node

// const shell = require('shelljs');
//
// if (shell.exec('git status').code !== 0) {
//     shell.echo('Error: Git commit failed');
//     shell.exit(1);
// } else {
//     console.log('good');
// }

const question = require('./questions/questions');
const inquirer = require('inquirer');
const figlet = require('figlet')

function main() {
    inquirer.prompt(question.questions)
        .then(answers => {
            console.log(answers);
        });
}

figlet('ALG Tools', function(err, data) {
    console.log(data);
    main();
});
