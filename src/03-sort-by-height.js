/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arr1 = arr.filter((elem) => elem !== -1);
  arr1.sort((a, b) => a - b);
  let counter = 0;
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr2[i] = arr1[counter++];
    } else arr2[i] = -1;
  }
  return arr2;
}

module.exports = sortByHeight;
