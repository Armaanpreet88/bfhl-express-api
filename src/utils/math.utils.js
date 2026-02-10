function fibonacci(n) {
  if (n < 0) throw new Error("Fibonacci must be non-negative");
  if (n === 0) return [];
  if (n === 1) return [0];

  const seq = [0, 1];
  while (seq.length < n) {
    seq.push(seq.at(-1) + seq.at(-2));
  }
  return seq;
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function filterPrimes(arr) {
  return arr.filter(isPrime);
}

function gcd(a, b) {
  return b === 0 ? Math.abs(a) : gcd(b, a % b);
}

function hcf(arr) {
  return arr.reduce((acc, val) => gcd(acc, val));
}

function lcmTwo(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

function lcm(arr) {
  return arr.reduce((acc, val) => lcmTwo(acc, val));
}

module.exports = { fibonacci, filterPrimes, hcf, lcm };
