// Allows you to create a single instance
const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({name: 'Temesghen'});
    return object;
  }

  return {
    getInstance: function() {
      if(!instance) {
        instance = createInstance();
      }

      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
document.querySelector('.singleton-pattern').textContent = `${instanceA.name} :Singleton Pattern`;

const instanceB = Singleton.getInstance();
document.querySelector('.singleton-pattern-equality').textContent = `${instanceA === instanceB} :Singleton Pattern`;