/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    // constraints (we assume that we don't get any constraints before the question)
    // What if numRows is 0, what should be the return value => will return error

    const resultsArray = [[1]];
    let prevArray = [1];
    
    if (numRows === 1) {
        return resultsArray;
    }``
    
    for (let i = 1; i < numRows; i++) {
        // generate new array with [1,1] since every array will have 1 at the beginning and end of the array
        let tempArray = new Array(2).fill(1);
        // insert getPreArray return value middle of [1,1]
        tempArray.splice(1, 0, ...getPrevArray(prevArray));
        // update prevArray for dynamic
        prevArray = tempArray;
        resultsArray.push(tempArray);
    }
    
    return resultsArray;
};

// get prev array value
function getPrevArray (arr) {
    const resultArr = [];
    for (let i = 1; i < arr.length; i++) {
        resultArr.push(arr[i - 1] + arr[i]);
    }
    
    return resultArr;
}
