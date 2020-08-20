'use strict';

const methods = iface => {
  const temp = [];
  for (const method in iface) {
    if (typeof iface[method] !== 'function') continue;
    temp.push([method, iface[method].length]);

  }
  return temp;
};

module.exports = { methods };
