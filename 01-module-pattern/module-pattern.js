/**
 * Some ground rules:
 *  1. Self contained module
 *    . Everything to do with my module is in my module
 *    . No global variables
 *    . If a module manages more than one thing it should be splited up
 *  2. Separation of concerns
 *  3. DRY code
 *  4. Efficient DOM usage
 *    . No global variables
 *    . Very few selectors
 *  5. No memory leaks
 *    . All events can be unbound
 */

// Basic structure

/*

(function() {
  // Declare private variables and functions

  return {
    // Declare public variables and functions
  }
})();

*/

// Example 01: Standard Module Pattern
const UICtrl = (function () {
  let text = 'Hello World: Standard Module Pattern';

  const changeText = function () {
    const element = document.querySelector('.standard-module-pattern');

    element.textContent = text;
  };

  return {
    callChangeText: function () {
      changeText();
      console.log(text);
    },
  };
})();

UICtrl.callChangeText();

// Revealing Module Controller
const ItemCtrl = (function () {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item added...');
  }

  function get(id) {
    return data.find((item) => item.id == id);
  }

  return {
    add,
    get,
  };
})();

ItemCtrl.add({ id: 1, itemName: 'Item 1' });
let element = document.querySelector('.revealing-module-pattern');
element.textContent = `${ItemCtrl.get(1).itemName}: Revealing Module Pattern`;

// JavaScript does not have a private keyword by default but using closures we can create private methods and private state.

var myModule = (function () {
  'use strict';

  var _privateProperty = 'Hello World';

  function _privateMethod() {
    console.log(_privateProperty);
  }

  return {
    publicMethod: function () {
      _privateMethod();
    },
  };
})();

var myModule = (function () {
  'use strict';

  var _privateProperty = 'Hello World';
  var publicProperty = 'I am a public property';

  function _privateMethod() {
    console.log(_privateProperty);
  }

  function publicMethod() {
    _privateMethod();
  }

  return {
    publicMethod: publicMethod,
    publicProperty: publicProperty,
  };
})();

myModule.publicMethod(); // outputs 'Hello World'
console.log(myModule.publicProperty); // outputs 'I am a public property'
console.log(myModule._privateProperty); // is undefined protected by the module closure
myModule._privateMethod(); // is TypeError protected by the module closure
