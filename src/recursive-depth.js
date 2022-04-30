const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  depthArray = 0;
  calculateDepth(arr, startDepth = 1, calledByUser = true) {
    if (calledByUser) {
      this.depthArray = 0
    }
    for (let i = 0; i < arr.length; i++) {
      let el = arr[i]
      if (Array.isArray(el)) {
        this.calculateDepth(el, startDepth + 1, false)
      }
    }
    if (startDepth > this.depthArray) {
      this.depthArray = startDepth
    }
    return this.depthArray
  }
}

module.exports = {
  DepthCalculator
};
