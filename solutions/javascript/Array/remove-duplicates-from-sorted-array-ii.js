/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    // constraints
    // what if nums array is empty
    
    let numsLength = nums.length;
    
    // initialize pointer and count to check if number showed twice
    let pointer = nums[0];
    let count = 1;
    
    for (let i = 1; i < numsLength; i++) {
        if (pointer === nums[i]) {
            // if pointer and current index number is same, then increase count
            count++;
            
            // if count is greater than 2, then it means it was already shown twice
            // so splice that from originam array
            // then decrease index and nums array length by 1
            // so that for loop iterates in right order
            if (count > 2) {
                nums.splice(i, 1);
                i--;
                numsLength -= 1;
            }
        } else {
            // if pointer and current number are not eqaul
            // then update the pointer and reset count to 1
            pointer = nums[i];
            count = 1;
        }
    }
};
