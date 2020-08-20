'use strict';

const generateKey = (length, possible) => {
  let rStr = '';
  for (let i = 0; i < length; i++) {
    const rNum = Math.floor(Math.random() * Math.floor(possible.length));
    rStr += possible[rNum];
  }

  return rStr;

};

module.exports = { generateKey };
