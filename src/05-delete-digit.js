/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString(10).split('');
  const arr2 = [];
  const temp = arr.slice();
  for (let i = 0; i < arr.length; i++) {
    arr.splice(i, 1);
    arr2.push(arr.join(''));
    arr = temp.slice();
  }
  return Math.max(...arr2);
}

module.exports = deleteDigit;
