/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
 var findRestaurant = function(list1, list2) {
    // constraints
    // will there be more duplicate items in one array
    // what if no common item in both arrays
    
    // declare hash and array to store results
    const hash = {};
    const resultsArray = [];
    
    // nested loops to find common item between two arrays
    list1.forEach((item, index) => {
        if (list2.some(el => el === item)) {
            hash[item] = index + list2.indexOf(item);
        }
    });
    
    // define the least indexed value
    const leastIndexValue = Math.min(...Object.values(hash));
    
    // loop through the hash object to store key with the least indexed value
    for (const key in hash) {
        if (hash[key] === leastIndexValue) {
            resultsArray.push(key);
        }
    }
    
    return resultsArray;
};


// Here is the other solution using Set, just for reference
function findRestaurant(list1, list2) {
    const map = new Map();
    let ret = [];
    let min = Infinity;
    for (let i = 0; i < list1.length; ++i) {
      map.set(list1[i], i);
    }
    for (let i = 0; i < list2.length; ++i) {
      if (map.has(list2[i])) {
        let index1 = map.get(list2[i]);
        let index2 = i;
        ret.push({ val: list2[i], index: index1 + index2 });
        min = Math.min(min, index1 + index2);
      }
    }
    // Basically ret should be map as well instead of array
    // so we don't have to filter it (it will be faster).
    return ret.filter(item => item.index === min).map(item => item.val);
  };
  