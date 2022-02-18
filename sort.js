// Simple Sort
function sort(inputArr) {
    inputArr.sort(function(a, b) {
      return a - b;
    });
    return inputArr;
}

module.exports = sort;