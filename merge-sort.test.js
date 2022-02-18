const mergeSort = require('./merge-sort');

test('merge sort correct', () => {
    expect(mergeSort([4,5,12,63,2,8])).toEqual([2,4,5,8,12,63]);
});