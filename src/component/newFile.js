let global = require("../global");
const insertText = require("./insertText");


const newFile = (text) => {
    global.content = "";
    insertText(0, text)

    global.currentInput = "";
    global.cursorPosition = 0;
}

module.exports = newFile;