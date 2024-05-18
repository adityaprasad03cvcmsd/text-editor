const displayContent = require("./displayContent");
const fs = require("fs");

let global = require("../global");
const rl = require("../readlineInterface");

const openFile = (file) => {
    if (fs.existsSync(file)) {
        global.fileName = file;
        global.content = fs.readFileSync(file, "utf8");
        displayContent();
    } else {
        console.log(`File not found: ${file}`);
        rl.prompt();
    }

    global.currentInput = "";
    global.cursorPosition = 0;
}

module.exports = openFile;