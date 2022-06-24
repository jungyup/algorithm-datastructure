/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    // constraints
    // What if one of the array is empty
    // What if there's no match value
    const resultArray = [];
    
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i])) {
            if (!resultArray.includes(nums1[i])) {
                resultArray.push(nums1[i]);
            }        
        }
    }

    return resultArray;
}

// implement hash table
var intersection = function(nums1, nums2) {
    const hash = {};
    const resultArray = [];
    
    nums1.forEach(item => {
        hash[item] ? hash[item]++ : hash[item] = 1;
    });
    
    nums2.forEach(item => {
        if (hash[item]) {
            if (!resultArray.includes(item)) {
                resultArray.push(item);
            }
        }
    });
    
    return resultArray;
};
