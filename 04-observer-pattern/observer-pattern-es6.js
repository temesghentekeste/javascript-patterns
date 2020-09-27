class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter ( item => {
      if(item != fn) {
        return item;
      }
    } );
    console.log(`You are now unsubscribed from ${fn.name}`);
  }

  fire() {
    this.observers.forEach( item => {
      item.call();
    })
  }
}


const click = new EventObserver();

// Create Event Listeners
document.querySelector('.sub-ms').addEventListener('click', e => {
  click.subscribe(getCurrMilliseconds)
});

document.querySelector('.unsub-ms').addEventListener('click', e => {
  click.unsubscribe(getCurrMilliseconds)
});

document.querySelector('.sub-s').addEventListener('click', e => {
  click.subscribe(getCurrSeconds)
});

document.querySelector('.unsub-s').addEventListener('click', e => {
  click.unsubscribe(getCurrSeconds)
});

document.querySelector('.fire').addEventListener('click', e => {
  click.fire()
});

// Click Handler
const getCurrMilliseconds = () => {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurrSeconds = () => {
  console.log(`Current Milliseconds: ${new Date().getSeconds()}`);
}