/**
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
    // constraints
    // will words be case sensitive
    // what if words array is empty
    
    const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    
    // declare set to store unique transformed morse code
    let transformation = new Set();
    
    // loop through each word from words array
    words.forEach(word => {
        let transform = '';
        
        // loop through each letter in word and get morse code of it
        for (let letter of word) {
            // since char code for a is 97, we subtract 97 to get morse code index
            transform += morseCode[letter.charCodeAt() - 97];
        }
        
        // add transformed morse code into set, only unique value will be stored
        transformation.add(transform);
    })
    
    // return the size of set
    return transformation.size;
};
