const global = require("../global");
const Searching = require("../utils/searching");

const find = (text) => {
    const index = Searching(global.content, text) || []

    if (index.length == 0) {
        console.log("text not found");
    } else {
        console.log(`text found at ${index.length} places`)
    }

    return index;
}

module.exports = find;