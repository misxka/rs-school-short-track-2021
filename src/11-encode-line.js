/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const result = [];
  result.push(arr[0]);
  let comparing = arr[0];
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (i === arr.length || arr[i] !== comparing) {
      result.push(result[result.length - 1]);
      if (i === arr.length) {
        if (sum > 1) result[result.length - 2] = sum;
        else result.pop();
        break;
      } else {
        if (sum > 1) result[result.length - 2] = sum;
        else result.pop();
        result.push(arr[i]);
        comparing = arr[i];
      }
      sum = 1;
    } else {
      sum++;
    }
  }
  return result.join('');
}

module.exports = encodeLine;
