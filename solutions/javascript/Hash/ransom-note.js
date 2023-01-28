/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // initialize the hash to store values
    const magazineHash = {};
    const ransomNoteHash = {};

    // construct hash with values for each string
    for (let char of magazine) {
        magazineHash[char] ? magazineHash[char]++ : magazineHash[char] = 1;
    };
    for (let note of ransomNote) {
        ransomNoteHash[note] ? ransomNoteHash[note]++ : ransomNoteHash[note] = 1;
    };

    // compare keys from both objects and return false
    // if ransomNoteHash key value is greater than magazineHash key
    // or simply if magazineHash key is not existing
    for (const key in ransomNoteHash) {
        if (ransomNoteHash[key] > magazineHash[key] || !magazineHash[key]) {
            return false;
        }
    };

    // if above loop runs successfully return true
    return true;
};
