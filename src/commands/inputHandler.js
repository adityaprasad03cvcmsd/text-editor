const r1 = require("../readlineInterface")

let global = require("../global");
const processCommand = require("./processCommand");
const rl = require("../readlineInterface");

const inputHandler = (char, key) => {
    if (char === '\x0d' && rl._ttyWrite) {  // Shift+Enter
        processCommand(global.currentInput);
        if (!global.currentInput.includes("insert_*")) {
            global.currentInput = '';
            global.cursorPosition = 0;
        }
    } else if (char === '\u0003') {  // Catch Ctrl+C
        r1.close();
    } else if (char === '\b' || char === '\x7f') {  // Catch Backspace
        if (global.cursorPosition > 0) {
            global.currentInput = global.currentInput.slice(0, global.cursorPosition - 1) +
                global.currentInput.slice(global.cursorPosition);
            global.cursorPosition--;
        }
    } else if (char === '\x1b[D') {  // Left arrow
        if (global.cursorPosition > 0) {
            global.cursorPosition--;
        }
    } else if (char === '\x1b[C') {  // Right arrow
        if (global.cursorPosition < global.currentInput.length) {
            global.cursorPosition++;
        }
    } else if (key.name === 'return') {
        global.currentInput = global.currentInput.slice(0, global.cursorPosition) +
            "\n" +
            global.currentInput.slice(global.cursorPosition);
        global.cursorPosition++;
    } else if (char != undefined) {
        global.currentInput = global.currentInput.slice(0, global.cursorPosition) +
            char +
            global.currentInput.slice(global.cursorPosition);
        global.cursorPosition++;
    }


}

module.exports = inputHandler;