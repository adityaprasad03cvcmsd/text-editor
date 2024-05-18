const closeFile = require("../component/closeFile");
const deleteFile = require("../component/deleteFile");
const editFile = require("../component/editFile");
const find = require("../component/find");
const findAndReplace = require("../component/findAndReplace");
const insertText = require("../component/insertText");
const newFile = require("../component/newFile");
const openFile = require("../component/openFile");
const saveFile = require("../component/saveFile");

let global = require("../global");
const rl = require("../readlineInterface");

const processCommand = () => {
    const line = global.currentInput
    const [command, ...args] = line.trim().split(" ");

    switch (command) {
        case 'insert_*':
            const position = parseInt(args[0], 10);
            const text = args.slice(1).join(' ');
            insertText(position, text);
            break;
        case "new_file":
            newFile(args.join(" "));
            break;
        case "find_replace":
            const findTxt = args[0];
            const replace = args[1];
            findAndReplace(findTxt, replace);
            rl.prompt();
            break;
        case "save":
            saveFile(global.fileName);
            rl.prompt();
            break;
        case "open":
            const fileToOpen = args[0];
            openFile(fileToOpen);
            rl.prompt();
            break;
        case "edit":
            editFile();
            break;
        case 'close':
            closeFile();
            rl.prompt();
            break;
        case 'find':
            find(args[0]);
            rl.prompt();
            break;
        case 'delete':
            deleteFile();
            break;
        case "exit":
            rl.close();
            break;
        default:
            console.log(`Unknown command: ${command}`);
            rl.prompt();
            break;
    }
}

module.exports = processCommand;