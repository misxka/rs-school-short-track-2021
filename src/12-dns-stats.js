/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The tempObject should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const reversedDomains = [];
  domains.forEach((elem) => {
    reversedDomains.push(elem.split('.').reverse().join('.'));
  });
  reversedDomains.sort();
  const tempObject = {};
  reversedDomains.forEach((elem) => {
    const tempArr = elem.split('.');
    let str = '';
    for (let i = 0; i < tempArr.length; i++) {
      if (i === 0) str = tempArr[i];
      else str = `${str}.${tempArr[i]}`;
      tempObject[str] = 0;
    }
  });
  const resultObject = {};
  Object.keys(tempObject).forEach((property) => {
    let sum = 0;
    for (let j = 0; j < reversedDomains.length; j++) {
      if (reversedDomains[j].includes(property)) sum++;
    }
    resultObject[`.${property}`] = sum;
  });
  return resultObject;
}

module.exports = getDNSStats;
