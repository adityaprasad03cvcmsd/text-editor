const rl = require('../readlineInterface');

let global = require("../global")

const displayContent = () => {
    console.clear();
    console.log(global.content);
    rl.prompt();
}

module.exports = displayContent;