/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    // contraints
    // what if the array is empty
    // what if non-integer value is included
    
    // initialize array to store running sum
    let runningSumArray = [];
    
    nums.reduce((prev, curr) => {
        // we push into array first and return prev + curr
        // so that the previous value is updated
        runningSumArray.push(prev + curr);
        return prev + curr;
    }, 0);
    
    return runningSumArray;
};
