const fs = require("fs")

let global = require("../global");
const rl = require("../readlineInterface");

const saveFile = () => {
    if (!global.isSaved) {
        return;
    }

    if (!global.fileName) {
        rl.question("Enter file name to save: ", (name) => {
            global.fileName = name;
            fs.writeFileSync(global.fileName, global.content);
            console.log(`Content saved to ${global.fileName}`);
            rl.prompt();
        });
    } else {
        fs.writeFileSync(global.fileName, global.content);
        console.log(`Content saved to ${global.fileName}`);
        rl.prompt();
    }

    global.currentInput = "";
    global.cursorPosition = 0;
    global.isSaved = true;
}

module.exports = saveFile