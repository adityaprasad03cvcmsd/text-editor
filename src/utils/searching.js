const computeLPSArray = (pat, M) => {
    // length of the previous longest prefix suffix
    let len = 0;
    let i = 1;

    let lps = [];
    lps[0] = 0; // lps[0] is always 0

    while (i < M) {
        if (pat.charAt(i) == pat.charAt(len)) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len != 0) {
                len = lps[len - 1];
            } else {
                lps[i] = len;
                i++;
            }
        }
    }
    return lps;
};

const Searching = (txt, searchText) => {
    let m = searchText.length;
    let n = txt.length;

    let j = 0; // index for searchText[]

    let lps = computeLPSArray(searchText, m);

    let foundAtIndex = [];
    let i = 0;
    while (n - i >= m - j) {
        if (searchText.charAt(j) == txt.charAt(i)) {
            j++;
            i++;
        }
        if (j == m) {
            foundAtIndex.push(i - j);
            j = lps[j - 1];
        } else if (i < n && searchText.charAt(j) != txt.charAt(i)) {
            if (j != 0) j = lps[j - 1];
            else i = i + 1;
        }
    }

    return foundAtIndex;
};


module.exports = Searching;