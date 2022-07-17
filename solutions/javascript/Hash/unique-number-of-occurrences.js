/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var uniqueOccurrences = function(arr) {
    // constraints
    // what if an array is empty
    
    // initialize hash map to store key/values from arr
    const hashArr = {};
    
    // iterate through arr to store key/values
    arr.forEach(value => {
        hashArr[value] ? hashArr[value]++ : hashArr[value] = 1;
    });
    
    const hashArrValues = Object.values(hashArr);
    
    return !containsDuplicates(hashArrValues);
};

// function to check if array has duplicate values
// return true if it contains, otherwise return false
function containsDuplicates (array) {
    return array.length !== new Set(array).size;
};
