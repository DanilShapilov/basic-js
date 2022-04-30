const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArray: [],
  getLength() {
    return this.chainArray.length
  },
  addLink(value = '( )') {
    if (value !== '( )') {
      value = `( ${value} )`
    }
    this.chainArray.push(value)
    return this
  },
  removeLink(position) {
    if (typeof position === 'string' || position < 1 || !this.chainArray[position - 1]) {
      this.chainArray = []
      throw new Error("You can't remove incorrect link!")
    }
    this.chainArray.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chainArray.reverse()
    return this
  },
  finishChain() {
    const chain = this.chainArray.join('~~')
    this.chainArray = []
    return chain
  }
};

module.exports = {
  chainMaker
};
