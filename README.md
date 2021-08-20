# lru-js
Simple Least Recently Used cache algorithm implementation in Javascript.

## Installation
Make sure you have [`git`](https://git-scm.com/downloads) installed.

```sh
> git clone https://github.com/XiehCanCode/lru-js
```
then import it as a local package!

## Example
```js
const LRUCache = require('lru-js/index');

let cache = LRUCache(2) // limit is optional, default to 120
cache.insert(1, 2)
cache.insert(2, 3)
cache.get(1) // here this key-value would be pushed to the end
cache.insert(3, 4) // this would insert the new key-value pair at the end and evicts the least used key-value pair since we're exceeding the limit, in this case it's {2 => 3}
console.log(cache) // LRUCache {limit: 2, map: Map(2) { 1 => 2, 3 => 4 }}
```

## Contributing
First of all thanks for thinking about contributing to this crap and yea feel free to contribute!

Please run test and make sure your code passes all the test:
```sh
> npm install mocha -g
> npm test
```

## License
[`MIT`](https://github.com/XiehCanCode/lru-js/blob/main/LICENSE)