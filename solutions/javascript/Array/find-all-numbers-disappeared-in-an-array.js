/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    // constraints
    // what if there is number that out of range?
    // what if every number appear in array?
    
    // initialize empty array to store numbers
    const numberDidNotAppearArray = [];
    
    // convert array to set to only contain unique number
    const set = new Set(nums);
    
    // iterate nums.length to find numbers that did not appear and store into array
    for (let i = 1; i < nums.length + 1; i++) {
        if (!set.has(i)) numberDidNotAppearArray.push(i);
    }
    
    return numberDidNotAppearArray;
};
