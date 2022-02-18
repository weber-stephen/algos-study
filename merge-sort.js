// Divide and conquer (or sort)

/**
 * Split an array and sort it
 * @param {*} inputArr 
 */
function mergeArr(leftArr,rightArr) {

    // List of values sorted already
    let doneArr = []
    
    // Break out of loop if any one of the array gets empty
    while (leftArr.length && rightArr.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (leftArr[0] < rightArr[0]) {
            doneArr.push(leftArr.shift())  
        } else {
            doneArr.push(rightArr.shift()) 
        }
    }
    // Add the remaining elements of the array
    return [ ...doneArr, ...leftArr, ...rightArr ]
}

/**
 * Merge sort
 * @param {*} array 
 */
function mergeSort(array) {
    const half = array.length / 2

    // Base case or terminating case
    if(array.length < 2){
        return array 
    }

    const left = array.splice(0, half)

    // Recursive call to sort each spit array
    return mergeArr(mergeSort(left),mergeSort(array))
}

module.exports = mergeSort;