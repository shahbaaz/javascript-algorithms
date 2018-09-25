/*
Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/

function uniteUnique(arr) {
  const resultArray = arguments[0].slice();
  console.log('BEFORE', resultArray);
  for (let i = 1; i < arguments.length; i++) {
    console.log(arguments[i]);
    arguments[i].forEach(element => {
      if (!resultArray.includes(element)) {
        resultArray.push(element);
      }
    });
    console.log('MIDDLE', resultArray);
  }
  console.log('AFTER', resultArray);
  return resultArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
