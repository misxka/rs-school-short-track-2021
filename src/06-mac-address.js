/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const arr = n.toString(10).split('-');
  let sum = 0;
  if (arr.length === 6) {
    for (let i = 0; i < 6; i++) {
      if (/[0-9A-Fa-f]{2}/.test(arr[i])) sum++;
    }
  }
  return sum === 6;
}

module.exports = isMAC48Address;
