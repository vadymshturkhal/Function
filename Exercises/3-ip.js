'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const forAcc = (acc, val) => ((acc << 8) + Number(val));

  return ip.split('.').reduce(forAcc);
};

module.exports = { ipToInt };
