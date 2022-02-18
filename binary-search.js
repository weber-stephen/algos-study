var bs = require("binary-search");

// How normal people would do it because it saves time and that saves money
function binarySearchCheat(haystack,needle) {
    return bs(haystack,needle, function(element, needle) { return element - needle; });
}

/**
 * Binary Search Algorithm
 * @param {*} sortedArr 
 * @param {*} key 
 */
function binarySearch(sortedArr, key){
    let startIndex = 0;
    let endIndex = sortedArr.length - 1;

    while (startIndex <= endIndex) {
        // Get the middle index
        let middleIndex = Math.floor((startIndex + endIndex) / 2);

        if (sortedArr[middleIndex] === key) {
            // found the key and its right in the middle
            return middleIndex;
        } else if (sortedArr[middleIndex] < key) {
            // continue searching to the right
            startIndex = middleIndex + 1;
        } else {
            // continue searching to the left
            endIndex = middleIndex - 1;
        }
    }
    // Return -1 if the key is not found
    return -1;
}

module.exports = {
    'binarySearchCheat': binarySearchCheat,
    'binarySearch': binarySearch
};