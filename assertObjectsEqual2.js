const eqArrays = function(arr1, arr2) {
  let booArr = [];
  let sum = 0;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        booArr.push(1);
      } else {
        booArr.push(0);
      }
    }
    for (let item of booArr) {
      sum += item;
    }
    if (sum !== arr1.length) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};


// eqObjects function
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keysmatch = false;
  let valuematch = [];
  let sum = 0;
  let sum1 = 0;
  //if (eqArrays(Object.keys(object1), Object.keys(object2))) {
  let keys1 = Object.keys(object1).sort(); // keys of first object
  let keys2 = Object.keys(object2).sort(); // keys of second object
  if (keys1.length !== keys2.length) {
    return false;
  }
    for (let z = 0; z < keys1.length; z++){
      if (keys1[z] === keys2[z]) {
        keysmatch = true;
        if (Array.isArray(object1[keys1[z]]) && Array.isArray(object2[keys2[z]])) {
          if (!eqArrays(object1[keys1[z]], object2[keys2[z]])) {
            return false;
          }
        } else if (object1[keys1[z]] !== object2[keys2[z]]){
          return false;
       } 
      }
    }
    return true;
  } 





// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

// test code
const object = { a: '1', b: 3 };
const object1 = { b: 2, a: '1' };
assertObjectsEqual(object1, object) ;
eqObjects(object, object1)
