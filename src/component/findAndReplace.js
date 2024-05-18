let global = require("../global");
const Replacing = require("../utils/replacing");
const displayContent = require("./displayContent");
const find = require("./find");

const findAndReplace = (findText, replace) => {
    const indexes = find(findText);
    global.content = Replacing(global.content, findText, replace, indexes);
    displayContent();
    global.currentInput = "";
    global.cursorPosition = 0;
    global.isSaved = false;
}

module.exports = findAndReplace;