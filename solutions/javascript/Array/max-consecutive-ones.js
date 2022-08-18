/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    // initialize variables to store max and current count
    let max = 0;
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        // if value is 1 then increase the count
        // otherwise reset the count
        if (nums[i] === 1) {
            count++;
        } else {
            count = 0;
        }
        
        // on each iteration, check max and current count to set max
        max = Math.max(max, count);
    }
    
    return max;
};
