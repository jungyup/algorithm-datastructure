/**
 * @param {number[][]} image
 * @return {number[][]}
 */
 var flipAndInvertImage = function(image) {
    // contraints
    // what if array is empty
    
    // loop into every array inside array to reverse/invert image
    for (let i = 0; i < image.length; i++) {
        reverseImage(image[i]);
        invertImage(image[i]);
    }
    
    return image;
};


// takes @param Array to reverse elements inside of it
// ex) [1,1,0] => [0,1,1]
function reverseImage (image) {
    let lastPart = image.length - 1;
    
    // loop until middle point of array and swap first/last element
    for (let i = 0; i < Math.floor(image.length) / 2; i++) {
        let temp = image[lastPart];
        image[lastPart] = image[i];
        image[i] = temp;
        lastPart--;
    }
    
    return image;
}

// takes @param Array to invert elements inside of it
// ex) [1,1,0] => [0,0,1]
function invertImage (image) {
    // loop into array and simply change 0 to 1 or 1 to 0
    // this works since there are only 0 and 1 for available values
    for (let i = 0; i < image.length; i++) {
        image[i] = image[i] === 0 ? 1 : 0;
    }
    
    return image;
}
