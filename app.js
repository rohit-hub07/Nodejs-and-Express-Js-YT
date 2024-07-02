const arr = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = arr.flattenDeep(items);
console.log(newItems);