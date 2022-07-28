/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
    if (nums.length === 0) return 0;
    
    let evenNumberDigits = 0;
    
    nums.forEach(item => {
        if (item.toString().length % 2 === 0) evenNumberDigits++;
    });
    
    return evenNumberDigits;
};
