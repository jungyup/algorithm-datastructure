/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    if (nums.length < 2) {
        return nums[0];
    }
    let largestSum = nums[0];
    const resultArr = [largestSum];
    
    for (let i = 1; i < nums.length; i++) {
        largestSum = Math.max(largestSum + nums[i], nums[i]);
        resultArr.push(largestSum);
    }
    
    return Math.max(...resultArr);
};