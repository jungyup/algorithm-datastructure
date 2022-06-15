/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLHS = function(nums) {
    // constraints
    // what if array is empty, what should be the return value
    
    // declare hash to store key and value
    const hash = {};
    
    // declare variable to store longest harmonious value
    let longestHarmonious = 0;
    
    // loop through nums array to store keys and values to hash
    nums.map(item => {
        if (hash[item]) return hash[item]++;
        else return hash[item] = 1;
    });
    
    // get the keys from hash and sort
    // hash store negative keys after positive, for example [0, 1, -1]
    // by using Array.sort we will have array like [-1, 0, 1]
    const hashKeys = Object.keys(hash).sort((a, b) => a - b);
    
    // loop through hash keys to get longest harmonious value
    for (let i = 0; i < hashKeys.length; i++) {
        if (hashKeys[i + 1] - hashKeys[i] === 1) {
            // if condition is met, check with previous stored longest harmonious and store higher value
            longestHarmonious = Math.max(longestHarmonious, hash[hashKeys[i]] + hash[hashKeys[i + 1]]);
        }
    }
    
    return longestHarmonious;
};
