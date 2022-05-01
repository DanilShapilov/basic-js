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
  alphabetMatrix = {
    alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    matrix: []
  }
  constructor(isReverse = false) {
    this.isReverse = isReverse
    this.generateAlphabetMatrix()
    // console.log(JSON.stringify(this.alphabetMatrix.matrix));
  }

  encrypt(message, key) {
    if (message == null || key == null) {
      throw new NotImplementedError('Incorrect arguments!');
    }

    let encrypted = ''
    for (let i = 0, keyI = 0; i < message.length; i++, keyI++) {
      const msgLetter = message[i]
      const msgLetterLower = msgLetter.toLowerCase()
      const keyLetter = key[keyI % key.length]
      const keyLetterLower = keyLetter.toLowerCase()

      const keyIndex = this.alphabetMatrix.alphabet.indexOf(keyLetterLower)
      const msgIndex = this.alphabetMatrix.alphabet.indexOf(msgLetterLower)

      if (msgIndex === -1) {
        encrypted += msgLetter
        keyI--
        continue;
      }

      encrypted += this.alphabetMatrix.matrix[keyIndex][msgIndex]

    }


    if (this.isReverse) {
      encrypted = encrypted.split('').reverse().join('')
    }
    return encrypted.toUpperCase()
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage == null || key == null) {
      throw new NotImplementedError('Incorrect arguments!');
    }

    let decrypted = ''
    for (let i = 0, keyI = 0; i < encryptedMessage.length; i++) {
      const msgLetter = encryptedMessage[i]
      const msgLetterLower = msgLetter.toLowerCase()
      const keyLetter = key[keyI % key.length]
      const keyLetterLower = keyLetter.toLowerCase()

      const keyIndex = this.alphabetMatrix.alphabet.indexOf(keyLetterLower)
      const msgIndex = this.alphabetMatrix.matrix[keyIndex].indexOf(msgLetterLower)

      if (msgIndex === -1) {
        decrypted += msgLetter
        continue;
      }
      keyI++

      decrypted += this.alphabetMatrix.alphabet[msgIndex]

    }

    if (this.isReverse) {
      decrypted = decrypted.split('').reverse().join('')
    }

    return decrypted.toUpperCase()
  }

  generateAlphabetMatrix() {
    for (let row = 0; row < this.alphabetMatrix.alphabet.length; row++) {
      const rowArr = []
      for (let column = 0; column < this.alphabetMatrix.alphabet.length; column++) {
        const letter = this.alphabetMatrix.alphabet[(column + row) % this.alphabetMatrix.alphabet.length];
        rowArr.push(letter)
      }
      this.alphabetMatrix.matrix.push(rowArr)
    }

  }
}

module.exports = {
  VigenereCipheringMachine
};
