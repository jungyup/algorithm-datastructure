/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    // Verify the contraints
    //  are numbers are positive or negative -> numbers are positive
    //  are there duplicates numbers in there -> no, there won't be duplicate numbers
    //  will there always be a solution available -> no, there might not
    //  what do we return if there's no solution -> just return null
    //  can there be multiple pairs that add up to that number -> only 1 pair
    
    // Write some test cases
    //  [1,3,7,9,2], t = 11 => [3,4]
    //  [1,3,7,9,2], t = 25 => null
    //  [], t = 1 => null
    //  [5], t = 5 => null
    //  [1,6], t = 7 => [0,1]
    
    // Figure out a solution without code
    //  try every pair of numbers from array with double for loop (two pointers)
    
    // Write out a solution in code
    
    if (nums.length < 2) {
        return null;
    }
    
    const hash = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (hash[target-nums[i]] >= 0) {
            return [hash[target-nums[i]], i];
        } else {
            hash[nums[i]] = i;
        }
    }
    
    return null;
}

// solution for double for loops
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }
    }
};