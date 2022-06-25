/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
 var transpose = function(matrix) {
    // initiate matrix to store results
    let resultMatrix = [];
    
    // first loop through row
    for (let i = 0; i < matrix[0].length; i++) {
        // create new array to store column values
        let currentCol = [];
        
        for (let j = 0; j < matrix.length; j++) {
            // push into the column array
            currentCol.push(matrix[j][i]);
        }
        
        // push column array into result matrix
        resultMatrix.push(currentCol);
    }
    
    return resultMatrix;
};
