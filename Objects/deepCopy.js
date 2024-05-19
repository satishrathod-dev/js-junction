// let original = { name: 'Alice', nested: { age: 25 } };
// let deepCopy = JSON.parse(JSON.stringify(original));




/*******    Using Recursion      ********/  
/*function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    let copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}
let original = { name: 'Alice', nested: { age: 25 } };
let deepCopy = deepCopy(original);*/



/**********   Lodash Library:   *********/ 
//   (The Lodash library provides a _.cloneDeep() function that creates a deep copy of an object)
const _ = require('lodash');
let original = { name: 'Alice', nested: { age: 25 } };
let deepCopy = _.cloneDeep(original);
