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

console.log(isPrimeNumber(67));
