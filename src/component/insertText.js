const displayContent = require("./displayContent");

let global = require("../global")

const insertText = (position, text) => {
    let content = global.content || '';
    if (position < 0 || position > content.length) {
        console.log("Invalid position.");
    } else {
        global.content = content.slice(0, position) + text + content.slice(position);
    }
    displayContent();
    global.cursorPosition = 0;
    global.currentInput = "";
    global.isSaved = false;
}

module.exports = insertText;