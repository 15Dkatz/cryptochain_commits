const { STARTING_BALANCE } = require('../config');
const { ec } = require('../util');

class Wallet {
  constructor() {
    this.balance = STARTING_BALANCE;

    const keyPair = ec.genKeyPair();

    this.publicKey = keyPair.getPublic().encode('hex');
  }
}

module.exports = Wallet;
