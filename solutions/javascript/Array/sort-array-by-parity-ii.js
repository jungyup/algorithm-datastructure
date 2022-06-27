/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParityII = function(nums) {
    // constraints
    // what if nums array's even numbers and odd numbers are not equal
    
    // initiate arrays to store the results and odds/evens
    const resultArray = [];
    const odds =[];
    const evens = [];
    
    // first iterate to store odds/evens
    nums.forEach(item => {
        if (item % 2 === 0) {
            evens.push(item);
        } else {
            odds.push(item);
        }
    });
    
    // second iterate even/odd number into resultArray
    for (let i = 0; i < odds.length; i++) {
        resultArray.push(evens[i]);
        resultArray.push(odds[i]);
    }
    
    return resultArray;
};


// Other possible solution
var sortArrayByParityII = function(A) {
    let result = new Array(A.length);
    
    for (let i = 0, even = 0, odd = 1; i < A.length; i ++) {
        if(A[i] % 2 === 0) {
            result[even] = A[i];
            even += 2;
        } else {
            result[odd] = A[i];
            odd += 2;
        }
    }
    return result;
};