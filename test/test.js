var assert = require("assert");
const LRUCache = require("../index");

describe('LRUCache', function() {
    describe('#dumb_test', function() {
        it('should return 2', function() {
            let lru = new LRUCache(2);
            assert.equal(lru.limit, 2)
        });
    });

    describe('#insert_test', function() {
        it('should return true', function() {
            let lru = new LRUCache(1);
            assert.equal(lru.insert("fuck", "u") instanceof Map, true)
        });
    });

    describe('#delete_test', function() {
        it('should return the correct size after deleting', function() {
            let lru = new LRUCache(2);
            lru.insert("ok", "ok")
            lru.insert("ook", "ok")
            lru.delete("ook")
            assert.equal(lru.map.size, 1)
        });
    });

    describe('#get_test', function() {
        it('should return the correct value assigned to the key', function() {
            let lru = new LRUCache(2);
            lru.insert("ok", "ok")
            lru.insert("ook", "ok")
            let val = lru.get("ok")
            assert.equal(val, "ok")
        });
    });

    describe('#lru_test', function() {
        it('idfk what to write here', function() {
            function compareMaps(map1, map2) {
                var testVal;
                if (map1.size !== map2.size) {
                    return false;
                }
                for (var [key, val] of map1) {
                    testVal = map2.get(key);
                    // in cases of an undefined value, make sure the key
                    // actually exists on the object so there are no false positives
                    if (testVal !== val || (testVal === undefined && !map2.has(key))) {
                        return false;
                    }
                }
                return true;
            }

            let lru = new LRUCache(2);
            lru.insert("ok", "ok")
            lru.insert("ook", "ok")
            lru.get("ok")
            lru.insert("pog", "champ")
            let lru2 = new LRUCache(2);
            lru2.insert("ok", "ok")
            lru2.insert("pog", "champ")
            assert.equal(compareMaps(lru.map, lru2.map), true)
        });
    });
});