/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
 var uncommonFromSentences = function(s1, s2) {
    // constraints
    // what if there's no umcommon words
    // what if strings are empty
    
    // initiate hash to store word
    // initiate array to store uncommon words
    const sHash = {};
    const uncommonWords = [];
    
    // split string with empty space to store words into array
    // then iterate through to store key/value into sHash
    s1.split(' ').forEach(item => {
        if (sHash[item]) sHash[item]++
        else sHash[item] = 1;
    });
    
    s2.split(' ').forEach(item => {
        if (sHash[item]) sHash[item]++
        else sHash[item] = 1;
    });
    
    // iterate through sHash to find key with value less or equal to 1
    // and push into uncommonWords array
    for (const key in sHash) {
        if (sHash[key] <= 1) {
            uncommonWords.push(key);
        }
    }
    
    return uncommonWords;
};
