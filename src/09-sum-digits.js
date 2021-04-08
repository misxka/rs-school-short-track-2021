/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let localN = n;
  const digits = [];
  while (localN > 0) {
    digits.push(localN % 10);
    localN = Math.trunc(localN / 10);
  }
  let sum = digits.reduce((acc, cur) => acc + cur);
  if (sum > 9) sum = getSumOfDigits(sum);
  return sum;
}

module.exports = getSumOfDigits;
