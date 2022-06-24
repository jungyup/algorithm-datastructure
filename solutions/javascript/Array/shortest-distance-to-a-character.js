/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
 var shortestToChar = function(s, c) {
    // constraints
    // what if there is no c character in s array
    
    // initiate array to store results
    const resultArray = [];
    
    // get every indexes of given character c
    const indexes = getEveryIndexes(s, c);
    
    // iterate through s and call getNearestIndex function
    for (let i = 0; i < s.length; i++) {
        // call getNearestIndex to get shortest distance value on current index
        resultArray.push(getShortestDistance(indexes, i));
    }
    
    return resultArray;
};

// function to get every indexes of given value
function getEveryIndexes (arr, value) {
    const indexes = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) indexes.push(i);
    }
    
    return indexes;
}

// function to get shortest distance from current index iterate in every indexes array
function getShortestDistance (indexes, valueIndex) {
    // initiate shortestDistance value with valueIndex - first index of indexes since Math.min will always return 0 if we initiate with 0
    let shortestDistance = Math.abs(valueIndex - indexes[0]);
    for (let i = 1; i < indexes.length; i++) {
        shortestDistance = Math.min(shortestDistance, Math.abs(valueIndex - indexes[i]));
    }
    
    return shortestDistance;
}
