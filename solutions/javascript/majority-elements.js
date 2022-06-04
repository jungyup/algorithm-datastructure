/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let numsObj = {};
    nums.map(item => {
       if (numsObj[item]) {
           numsObj[item]++;
       } else {
           numsObj[item] = 1;
       }
    });
    
    return Object.keys(numsObj).find(key => numsObj[key] === Math.max(...Object.values(numsObj)));
};
