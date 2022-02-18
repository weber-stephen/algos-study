const Hashmap = require('./hash-map');

test('merge sort correct', () => {
    let myHashmap = new Hashmap();
    myHashmap.set('name', 'John');
    expect(myHashmap.get('name')).toEqual('John');
});