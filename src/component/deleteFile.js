const fs = require('fs');
const global = require("../global");
const rl = require('../readlineInterface');

const deleteFile = () => {
    if (global.fileName == "") {
        console.log("No file is there to delete")
        return;
    }

    rl.question("do you want to delete this file", (answer) => {
        if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
            fs.unlink(global.fileName, (err) => {
                if (err) {
                    console.error('Error deleting file:', err);
                    return;
                }
                console.log(`File ${global.fileName} deleted successfully.`);
            });

            global.content = '';
            global.fileName = '';
        } else {
            console.log("file not deleted");
        }

    })

};

module.exports = deleteFile;