/**
 * @param {number} n
 * @return {boolean}
 */
var confusingNumber = function(n) {
    const numberToArray = n.toString().split('');
    const invalideNumbers = ['2', '3', '4', '5', '7'];

    // iterate array to convert confusing numbers
    // and if there's any invalid number, then return false
    for (let i = 0; i < numberToArray.length; i++) {
        if (numberToArray[i] === '6') numberToArray[i] = '9';
        else if (numberToArray[i] === '9') numberToArray[i] = '6';
        else if (invalideNumbers.includes(numberToArray[i])) return false;
    }

    // check if value is still same after reverse the number
    // return false if still same, otherwise return true
    return n !== parseInt(numberToArray.reverse().join(''));
};
