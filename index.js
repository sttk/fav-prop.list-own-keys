'use strict';

function listOwnKeys(obj) {
  switch (typeof obj) {
    case 'object': {
      return Object.getOwnPropertyNames(obj || {});
    }
    case 'string': {
      obj = new String(obj);
      return Object.getOwnPropertyNames(obj);
    }
    case 'function': {
      return Object.getOwnPropertyNames(obj);
    }
    default: {
      return [];
    }
  }
}

module.exports = listOwnKeys;
