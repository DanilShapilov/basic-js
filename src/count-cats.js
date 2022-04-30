const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  // return arr.join().match(/(?<=,|^)\^\^(?=,|$)/g)?.length ?? 0
  return arr.reduce((counter, row) => counter += row.filter(item => item === '^^').length, 0)
}

module.exports = {
  countCats
};
