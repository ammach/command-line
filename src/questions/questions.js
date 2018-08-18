const questions = [
    /*input*/
    {
        type: 'input',
        name: 'team',
        message: 'your favourite team ?'
    },
    /*confirm*/
    {
        type: 'confirm',
        name: 'isHidden',
        message: 'is box hidden ?'
    },
    /*list*/
    {
        type: 'list',
        name: 'choices',
        message: 'make a choice:',
        choices: ['choice 1', 'choice 2', 'choice 3'],
        when: function (answers) {
            return answers['isHidden']
        }
    },
    /*checkbox*/
    {
        type: 'checkbox',
        name: 'isChecked',
        message: 'check a choice',
        choices: ['yes', 'no']
    }
];

module.exports = {
    questions
}