let global = require("../global")
const rl = require("../readlineInterface")

const editFile = () => {
    rl.write(global.content);
    global.currentInput = `insert_* ${global.content}`;
    global.cursorPosition = global.currentInput.length;
    global.content = "";
}

module.exports = editFile;