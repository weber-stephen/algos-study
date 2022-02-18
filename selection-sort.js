/**
 * Selection sort
 * @param {*} inputArr 
 */
function selectionSort(inputArr) { 
    let n = inputArr.length;
    
    // Loop through the array
    for(let i = 0; i < n; i++) {

        // Find the minimum element in unsorted array
        let min = i;

        // Loop through the unsorted array
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }

         if (min != i) {
            // Swapping the elements
            let tmp = inputArr[i]; 
            
            // Set new index
            inputArr[i] = inputArr[min];

            // Set old index
            inputArr[min] = tmp;      
        }
    }
    return inputArr;
}

module.exports = selectionSort;