/*
Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const multiplesArr = [];
  let completeArr = [];
  for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
    completeArr.push(i);
  }
  const primeArray = getPrimeArray(sortedArr[1]);
  console.log('COMPLETE ARRAY', completeArr);
  console.log('PRIME ARRAY', primeArray);
  // Divide complete array until all of its values equals 1
  primeArray.forEach(item => {
    console.log('ITEM', item);
    while(isDivisible(completeArr, item)) {
      multiplesArr.push(item);
      completeArr.forEach((element, index, array) => { 
        if (element % item === 0) {
          array[index] = element / item;
        }
      });
    }
  });

  console.log('COMPLETE ARRAY', completeArr);
  console.log('MULTIPLES ARRAY', multiplesArr);
  return multiplesArr.reduce((acc, cur) => acc * cur, 1);
}

console.log('LCM', smallestCommons([23,18]));

function getPrimeArray(num) {
  const primeArray = [];
  for (let i = 2; i <= num; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      primeArray.push(i);
    }
  }
  return primeArray;
}

function isDivisible(arr, num) {
  if (num === 0 || isNaN(num)) {
    return false;
  }
  return arr.filter(item => item % num  === 0).length > 0 ? true : false;
}
