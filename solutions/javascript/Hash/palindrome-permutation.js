/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    // initialize variables to store hash and odd letter count
    const hash = {};
    let oddLetterCount = 0;

    // loop string to construct hash
    for (const letter of s) {
        if (hash[letter]) hash[letter]++;
        else hash[letter] = 1;
    }

    // loop hash to find keys that has odd value
    for (const key in hash) {
        console.log(hash[key])
        if(hash[key] % 2 !== 0) oddLetterCount++;
    }

    // if there is more than 2 odd letters return false, otherwise true
    return oddLetterCount < 2;
};
