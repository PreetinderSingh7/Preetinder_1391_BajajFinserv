function fibonacci(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Input must be a non-negative integer");
  }
  const res = [];
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    res.push(a);
    [a, b] = [b, a + b];
  }
  return res;
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function filterPrimes(arr) {
  if (!Array.isArray(arr)) throw new Error("Input must be an array");
  return arr.filter(n => Number.isInteger(n) && isPrime(n));
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function calculateHCF(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Input must be a non-empty array");
  }
  return arr.reduce((a, b) => gcd(a, b));
}

function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

function calculateLCM(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Input must be a non-empty array");
  }
  return arr.reduce((a, b) => lcm(a, b));
}

module.exports = {
  fibonacci,
  filterPrimes,
  calculateHCF,
  calculateLCM
};
