// const shell = require('shelljs');
//
// if (shell.exec('docker images').code !== 0) {
//     shell.echo('Error: Git commit failed');
//     shell.exit(1);
// } else {
//     console.log('good');
// }

const inquirer = require('inquirer');
const question = require('./questions/questions');


function main() {
    inquirer.prompt(question.questions)
        .then(answers => {
            console.log(answers);
        });
}

main();