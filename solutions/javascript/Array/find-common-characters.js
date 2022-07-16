/**
 * @param {string[]} words
 * @return {string[]}
 */
 var commonChars = function(words) {
    // convert first word into array
    let startWord = words[0].split('');
    
    for(let word of words) {
        const chars = word.split('');
        startWord = startWord.filter(sChar => {
            const idx = chars.indexOf(sChar);
            
            // if the char has been found, set it a value so it doesnt get discovered again
            if (idx > -1) {
                chars[idx] = 'found';
                return true;
            }
            
            return false;
        });
    }
    
    return startWord;
};
