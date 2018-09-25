/*
Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
*/

function whatIsInAName(collection, source) {
  var arr = [];
  // Get source keys
  const sourceKeys = Object.keys(source); // ['last']
  console.log('SOURCE', source);
  console.log('SOURCE KEYS', sourceKeys)
  collection.forEach((item, index) => {
    // Get keys for each item object inside the collection
    const itemKeys = Object.keys(item); // ['first', 'last'];
    console.log('COLLECTION ITEM', collection[index]);
    console.log('COLLECTION KEYS', itemKeys);
    let matchedItems = [];
    // Iterate through source keys
    sourceKeys.forEach(element => {
      // Check if source key: value matches with collection item's key: value
      if (collection[index][element] === source[element]) {
        // If matched then push key to the matched array
        matchedItems.push(element);
      }
    });
    console.log('MATCHED ITEMS', matchedItems);
    // MatchedItems array length should be equal to sourceKeys array
    if (matchedItems.length === sourceKeys.length) {
      // If equal then push the collection item object in the array to be return
      arr.push(collection[index]);
    }
  });
  
  return arr;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }));
