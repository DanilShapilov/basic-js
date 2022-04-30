const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (arr instanceof Array === false) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  return arr.reduce((newArr, el, index) => {
    const lastNewArrElIndex = newArr.length - 1

    const lastNewArrEl = newArr[lastNewArrElIndex]

    const prevEl = arr[index - 1]

    if (prevEl === "--discard-next") {
      return newArr
    }

    if (prevEl === "--double-next") {
      newArr.push(el, el)
      return newArr
    }

    if (el === "--discard-prev") {
      const prevElOfPrevEl = arr[index - 2]
      if (prevElOfPrevEl !== "--discard-next") {
        newArr.pop()
      }
      return newArr
    }

    if (el === "--double-prev") {
      const prevElOfPrevEl = arr[index - 2]
      if (prevElOfPrevEl !== "--discard-next") {
        lastNewArrEl && newArr.push(lastNewArrEl)
      }
      return newArr
    }

    if (
      el !== "--discard-next"
      && el !== "--discard-prev"
      && el !== "--double-prev"
      && el !== "--double-next"
    ) {
      newArr.push(el)
    }
    return newArr
  }, [])
}

module.exports = {
  transform
};

transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5])

// input: [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5],
//   output: [1, 2, 3, 1337, 1337, 1337, 4, 5]