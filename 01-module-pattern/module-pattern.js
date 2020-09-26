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
  let text = "Hello World";

  const changeText = function() {
    const element = document.querySelector('h1');

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