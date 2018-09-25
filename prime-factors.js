// Get an array of prime factors of a given number
function getPrimeFactors(num) {
  const primeArray = [];
  for (let i = 2; i <= num; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }
    if (isPrime && num % i === 0) {
      primeArray.push(i);
    }
  }
  return primeArray;
}

console.log('PRIME FACTORS', getPrimeFactors(10));
