/* Question Description
    Given two cells on the standard chess board, determine whether they have the same color or not.
*/

/* Examples
    For cell1 = "A1" and cell2 = "C3", the output should be
    solution(cell1, cell2) = true.

    For cell1 = "A1" and cell2 = "H3", the output should be
    solution(cell1, cell2) = false.

    Chess board may look like this:
    8
    7
    6
    5
    4
    3                        X
    2
    1   X
        a  b  c  d  e  f  g  h
*/

/* Input/Output and Constraints
    [execution time limit] 4 seconds (js)

    [input] string cell1

    Guaranteed constraints:
    cell1.length = 2,
    'A' ≤ cell1[0] ≤ 'H',
    1 ≤ cell1[1] ≤ 8.

    [input] string cell2

    Guaranteed constraints:
    cell2.length = 2,
    'A' ≤ cell2[0] ≤ 'H',
    1 ≤ cell2[1] ≤ 8.

    [output] boolean

    true if both cells have the same color, false otherwise.
*/

// Solution
function solution(cell1, cell2) {
    return checkColor(cell1) === checkColor(cell2);
}

function checkColor (cell) {
    const oddLetters = 'ACEG';
    
    if (oddLetters.includes(cell[0])) {
        return parseInt(cell[1]) % 2 === 0 ? 'white' : 'black';
    } else {
        return parseInt(cell[1]) % 2 === 0 ? 'black' : 'white';
    }
}
