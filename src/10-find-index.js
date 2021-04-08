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
  const binarySearch = function(arr, first, last, val) {
    if (first <= last) {
      const middle = Math.floor((first + last) / 2);
      if (val === arr[middle]) return middle;
      if (val < arr[middle]) return binarySearch(arr, first, middle - 1, val);
      return binarySearch(arr, middle + 1, last, val);
    }
    return -1;
  };
  return binarySearch(array, 0, array.length - 1, value);
}

module.exports = findIndex;
