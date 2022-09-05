/* Question Description
    Some people are standing in a row in a park.
    There are trees between them which cannot be moved.
    Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
    People can be very tall!
*/

/* Examples
    For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
    solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
*/

/* Input/Output and Constraints
    [execution time limit] 4 seconds (js)
    [input] array.integer a

    If a[i] = -1, then the ith position is occupied by a tree.
    Otherwise a[i] is the height of a person standing in the ith position.

    Guaranteed constraints:
    1 ≤ a.length ≤ 1000,
    -1 ≤ a[i] ≤ 1000.

    [output] array.integer
    Sorted array a with all the trees untouched.
*/

// Solution

function solution(a) {
    // initialize the treeIndex array to store index value of trees
    const treeIndex = [];
    
    a.forEach((tree, idx) => {
        if (tree === -1) {
            treeIndex.push(idx);
        }
    });
    
    // sort the array and splice trees
    let sortedArr = a.sort((b, c) => b - c);
    sortedArr.splice(0, treeIndex.length);
    
    // iterate to insert trees into the sortedArray
    for (let i = 0; i < treeIndex.length; i++) {
        sortedArr.splice(treeIndex[i], 0, -1);
    }
    
    return sortedArr;
}
