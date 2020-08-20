'use strict';

const random = (min = 0, max = 0) => {
  if (!max) {
    max = min;
    min = 0;
  }

  return Math.floor(Math.random() * Math.floor(max - min + 1)) + min;
};

module.exports = { random };
