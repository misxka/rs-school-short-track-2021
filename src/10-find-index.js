/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const first = 0;
  const last = array.length - 1;
  if (first <= last) {
    const middle = Math.floor((first + last) / 2);
    if (value === array[middle]) return middle;
    if (value < array[middle]) return findIndex(array.slice(0, middle), value);
    return (middle + 1) + findIndex(array.slice(middle + 1), value);
  }
  return -1;
}

module.exports = findIndex;
