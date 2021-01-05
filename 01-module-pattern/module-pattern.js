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
const UICtrl = (function() {
  let text = "Hello World: Standard Module Pattern";

  const changeText = function() {
    const element = document.querySelector('.standard-module-pattern');

    element.textContent = text;
  }

  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    }
  }
})();

UICtrl.callChangeText();

// Revealing Module Controller
const ItemCtrl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item added...');
  }

  function get(id) {
    return data.find(item => item.id == id);
  }

  return {
    add,
    get
  }
})();

ItemCtrl.add({ id: 1, itemName: 'Item 1'});
let element = document.querySelector('.revealing-module-pattern');
element.textContent = `${ItemCtrl.get(1).itemName}: Revealing Module Pattern`;


// JavaScript does not have a private keyword by default but using closures we can create private methods and private state.

var myModule = (function() {
  'use strict';

  var _privateProperty = 'Hello World';

  function _privateMethod() {
    console.log(_privateProperty);
  }

  return {
    publicMethod: function() {
      _privateMethod();
    }
  };
})();