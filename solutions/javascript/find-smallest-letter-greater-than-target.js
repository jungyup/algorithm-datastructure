/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 var nextGreatestLetter = function(letters, target) {
    // constraints
    // is letters case-sensitive
    // what if no letter is greater than target
    // what if letters array is empty
    
    // initialize resultLetter with first element from letters array
    // in case for when there is no letter greater than target
    let resultLetter = letters[0];
    
    // loop through the array and if letter greater target found
    // then set the value to variable and break out of the loop
    // this logic is working since the letters array was already sorted out in non-decreasing order
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] > target) {
            resultLetter = letters[i];
            break;
        }
    }
    
    return resultLetter;
};



// binary search implementation
// just for the reference
var nextGreatestLetter = function(letters, target) {
    if (letters.length === 1) {
        return letters[0];
    }

    let left = 0;
    let right = letters.length;
    
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (letters[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if (left === letters.length) {
        return letters[0];
    } else {
        return letters[left];
    }
};