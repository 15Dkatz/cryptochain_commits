class TransactionPool {
  constructor() {
    this.transactionMap = {};
  }

  setTransaction(transaction) {
    this.transactionMap[transaction.id] = transaction;
  }
}

module.exports = TransactionPool;
