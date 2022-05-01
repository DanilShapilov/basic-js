const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isReverse = isDirect === false
  }

  encrypt(message, key) {
    if (message == null || key == null) {
      throw new NotImplementedError('Incorrect arguments!');
    }

    return ''.toUpperCase()
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage == null || key == null) {
      throw new NotImplementedError('Incorrect arguments!');
    }

    return ''.toUpperCase()
  }
}

module.exports = {
  VigenereCipheringMachine
};
