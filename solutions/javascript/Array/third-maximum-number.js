/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
    // constraints (we assume that we didn't get any constraints before the question)
    // what if nums array is empty
    // what if non-integer value is within nums array
    
    // we convert sorted array into set to store only unique values
    const set = new Set(nums.sort((a, b) => b - a));
    
    // if set size less than 3, then we return maximum value from the set
    if (set.size < 3) {
        return Math.max(...nums);
    }
    
    // otherwise, we return 2nd index of the set for the third maximum valueT
    return Array.from(set)[2];
};
