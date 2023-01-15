/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    // initialize hash for Roman letters
    const RomanLetters = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    // to store the result roman letter
    let result = "";

    // loop hash to check if num is greater than current letter
    // if it is, then concat the letter to result
    // and subtract value from num
    for (let key in RomanLetters) {
        while (num >= RomanLetters[key]) {
            result += key;
            num -= RomanLetters[key];
        }
    }

    return result;
};
