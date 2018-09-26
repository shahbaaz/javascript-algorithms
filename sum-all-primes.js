/*
Sum All Primes
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
*/

function sumPrimes(num) {
  // Regular approach
  // const primeArray = [];
  let primeSum = 0;
  // for (let i = 2; i <= num; i++) {
  //   let isPrime = true;
  //   for (let j = 2; j < i; j++) {
  //     if (i % j === 0) {
  //       isPrime = false;
  //     }
  //   }
  //   if (isPrime) {
  //     primeArray.push(i);
  //     primeSum += i;
  //   }
  // }

  // for (let i = 2; i <= num; i++) {
  //   if (isPrimeNumber(i)) {
  //     primeArray.push(i);
  //   }
  // }

  // console.log(primeArray);
  // const primeSum = primeArray.reduce((acc, red) => acc + red, 0);
  // console.log(primeSum);

  // Recursive approach
  if (num === 0) {
    return 0;
  }

  if (num > 1 && isPrimeNumber(num)) {
    primeSum = num + sumPrimes(num - 1);
  } else {
    primeSum += sumPrimes(num - 1);
  }
  return primeSum;
}

console.log(sumPrimes(977));

// Check whether a given number is prime or not
function isPrimeNumber(num) {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
    }
  }
  return isPrime;
}
