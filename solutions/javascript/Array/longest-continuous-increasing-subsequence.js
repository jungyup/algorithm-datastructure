/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLengthOfLCIS = function(nums) {
    // if nums length is less than 2, simple return nums.length
    if (nums.length < 2) {
        return nums.length;
    }
    
    // initialize the variables to store result and current longest length
    let result = 0;
    let current = 1;

    for (let i = 1; i < nums.length; i++) {
        // if current number is greater, then increase current length
        // otherwise, compare and store higher result and reset current to 1
        if (nums[i] > nums[i - 1]) {
            current++;
        } else {
            result = Math.max(result, current);
            current = 1;
        }
    }
    
    // compare once again in case if number keep increasing until the end of array
    // means result has not been reassigned, so it was 0
    return Math.max(result, current);
};
