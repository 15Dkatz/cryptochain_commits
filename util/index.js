const EC = require('elliptic').ec;

const ec = new EC('secp256k1');

module.exports = { ec };
