/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const firstElements = {};
  let sum = 0;
  s1.split('').forEach((elem) => {
    if (firstElements[elem] === undefined) {
      firstElements[elem] = 1;
    } else {
      firstElements[elem]++;
    }
  });
  s2.split('').forEach((elem) => {
    if (firstElements[elem] !== undefined && firstElements[elem] > 0) {
      sum++;
      firstElements[elem]--;
    }
  });
  return sum;
}

module.exports = getCommonCharacterCount;
