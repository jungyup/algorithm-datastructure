/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    // constraints
    // what if array is empty, what should be the return value -> return error as array length has to be greater than 1
    // if 0 is in array, either include 0 or not in subarray will be accepted as an answer
    
    // test cases
    validateSubArray([1], 1); // test passed
    validateSubArray([-2,1,-3,4,-1,2,1,-5,4], 6); // test passed
    validateSubArray([5,4,-1,7,8], 22); // test failed
    
    return actualMaxSubArray(nums);
};

// acutal code for solution, we moved it here since we cannot change the function name for execution in leetcode. we needed this to execute test cases.
function actualMaxSubArray (nums) {
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
}

// test to validate subarray
function validateSubArray (arr, expectedValue) {
    try {
        actualMaxSubArray(arr) === expectedValue ? console.log('test passed') : console.log('test failed');
    } catch (error) {
        console.log(error);
    }
}
