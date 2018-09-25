/*
Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {

  let sum = 1;
  let counter = 0;
  const fibArray = [1, 1];

  while (num > sum) {
    sum = fibArray[counter] + fibArray[counter + 1];
    if (num >= sum) {
      fibArray.push(sum);
      counter++;
    }
  } 

  console.log(fibArray);
  let fibOddSum = 0;
  fibArray.forEach(element => {
    if (element % 2 != 0) {
      fibOddSum += element;
    }
  });

  console.log(fibOddSum);
  return fibOddSum;
}

sumFibs(86025);
