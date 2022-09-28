const { STARTING_BALANCE } = require('../config');

class Wallet {
  constructor() {
    this.balance = STARTING_BALANCE;
  }
}

module.exports = Wallet;