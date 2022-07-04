/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    // if there is no negative value in array, then we just return nums array with the squares of each number
    if (nums[0] >= 0) {
        return nums.map(num => num * num);
    }
    
    // set two pointers from beginning and end
    let leftPoint = 0;
    let rightPoint = nums.length - 1;
    
    // iterate through nums array and check leftPoint number and rightPoint number's squares value
    // if leftPoint number is greater than move leftPoint number after rightPoint number
    // then decrease rightPoint to continue the loop
    while (leftPoint < rightPoint) {
        if (Math.pow(nums[leftPoint], 2) > Math.pow(nums[rightPoint], 2)) {
            nums.splice(rightPoint + 1, 0, nums[leftPoint]);
            nums.splice(leftPoint, 1);
            rightPoint--;
        } else {
            rightPoint--;
        }
    }
    
    // after number is sorted based on it's squares value, return nums array with the squares of each number
    return nums.map(num => num * num);
};