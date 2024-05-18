const global = require('../global');
const rl = require('../readlineInterface');
const saveFile = require('./saveFile');

function closeFile() {
    if (global.content != '') {
        rl.question('Do you want to save changes before closing? (yes/no) ', (answer) => {
            if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
                saveFile();
            }
            global.content = '';
            global.fileName = '';
            console.log('File closed.');
        });
    } else {
        console.log('No file is currently open.');
        rl.prompt();
    }
}

module.exports = closeFile;
