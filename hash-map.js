class Hashmap {
    constructor() {
        this._data = new Array();
    }
    set(key, value) {
        // Get index
        const indexOfKey = this._getIndex(key);

        if(this._data[indexOfKey]) {
            this._data[indexOfKey].push({key, value});
        } else {
            this._data[indexOfKey] = [{key, value}];
        }
        return this;
    }
    get(key) {
        
        const indexOfKey = this._getIndex(key);

        for (let arrayIndex = 0; arrayIndex < this._data[indexOfKey].length; arrayIndex++) {
            const entry = this._data[indexOfKey][arrayIndex];
            
            // Check if key matches
            if(entry.key === key) {
                // Return value
                return entry.value
            }
        }
    }

    _getIndex(key) {
        // Get hash value of key
        const indexHash = this._hash(key);
        // Get index of hash value
        const index = indexHash % this._data.length;
        return index;
    }

    _hash(key) {
        let hashValue = 0;

        // Convert key to string with type coercion
        const stringKeyType = `${key}${typeof key}`;
        
        // Loop through each character in string
        for (let index = 0; index < stringKeyType.length; index++) {
            // Get character code to hash
            const charCode = stringKeyType.charCodeAt(index);
            hashValue += charCode << (index * 8);
        }
    
        return hashValue;
    }
}

module.exports = Hashmap;