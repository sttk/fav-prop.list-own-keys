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
      var arr = Object.getOwnPropertyNames(obj);
      for (var i = arr.length - 1; i >= 0; i--) {
        var key = arr[i];
        /* istanbul ignore if */
        if (key === 'caller' || key === 'arguments') {
          arr.splice(i, 1);
        }
      }
      /* istanbul ignore if */
      if (!('name' in obj)) { // A function don't have `name` prop on IE
        arr.push('name');
      }
      return arr;
    }
    default: {
      return [];
    }
  }
}

module.exports = listOwnKeys;
