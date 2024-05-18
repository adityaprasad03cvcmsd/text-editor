const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'editor> ',
    terminal: true
});

module.exports = rl;