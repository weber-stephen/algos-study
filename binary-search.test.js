const {binarySearchCheat, binarySearch} = require('./binary-search');

test('binary search using an npm with the correct result', () => {
    expect(binarySearchCheat([1, 2, 3, 4], 3)).toEqual(2);
});
test('binary search returns the correct result', () => {
    expect(binarySearch([1, 2, 3, 4], 3)).toEqual(2);
});