const rl = require('./src/readlineInterface');
const inputHandler = require("./src/commands/inputHandler");

rl.input.on("keypress", inputHandler);

rl.on("close", () => {
    console.log("Exiting editor");
    process.exit(0);
});

console.log("Terminal Text Editor");
console.log(
    "Commands: new_file <text>, find <find>, find_replace <find> <replace>, save, open <filename>, close, delete, exit"
);
rl.prompt();
