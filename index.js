/**
 * LRU Cache implementation
 *
 * @param {Number} [limit] - 120
 */
module.exports = class LRUCache {
    limit = 120;
    map = new Map();

    constructor(limit) {
        if (limit !== undefined) {
            this.limit = limit
        }
    }

    /**
     * Delete a key-value pair if exists
     * 
     * @param {any} key 
     * @returns {null}
     */
    delete(key) {
        if (this.map.has(key) === true) {
            this.map.delete(key)
            return;
        } else {
            throw Error("you little bastard");
        }
    }

    /**
     * 
     * @param {any} key 
     * @returns {null|any}
     */
    get(key) {
        let value = this.map.get(key)
        if (!value) {
            return null;
        }
        this.delete(key) // refreshing in-order to push the key-value pair to the end
        this.insert(key, value)
        return value;
    }

    /**
     * Insert a key-value pair, if the pair already exists update them
     * 
     * @param {any} key 
     * @param {any} value 
     * @returns {Map<any, any>}
     */
    insert(key, value) {
        if (this.map.size >= this.limit) {
            let first = this.map.keys().next().value;
            this.delete(first)

            if (this.map.has(key) === true) {
                this.delete(key) // refreshing to push the pair at the end
                return this.map.set(key, value);
            }

            return this.map.set(key, value)
        }

        return this.map.set(key, value)
    }

}