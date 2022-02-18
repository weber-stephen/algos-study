const sort = require('./sort');

test('sort correct', () => {
    expect(sort([4,5,12,63,2,8])).toEqual([2,4,5,8,12,63]);
});