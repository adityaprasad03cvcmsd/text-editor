const Replacing = (text, pattern, replacement, indices) => {
    let result = "";
    let lastIndex = 0;

    for (let index of indices) {
        result += text.slice(lastIndex, index) + replacement;
        lastIndex = index + pattern.length;
    }
    result += text.slice(lastIndex);

    return result;
};

module.exports = Replacing;