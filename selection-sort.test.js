const selectionSort = require('./selection-sort');

test('selection sort correct', () => {
    expect(selectionSort([4,5,12,63,2,8])).toEqual([2,4,5,8,12,63]);
});