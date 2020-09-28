// User
const User = function(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  }, 
  recieve: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

// Chatroom
const Chatroom = function() {
  let users = {}; // List of users

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to) {
      if(to) {
        // Single user message
        to.recieve(message, from);
      }else {
        // Mass message
        for (const key in users) {
          if (users[key] !== from) {
            users[key].recieve(message, from);            
          }
        }
      }
    }
  }
}

const temesghen = new User('Temesghen');
const biniam = new User('Biniam');
const aki = new User('Aki');

const chatroom = new Chatroom();

chatroom.register(temesghen);
chatroom.register(biniam);
chatroom.register(aki);

temesghen.send('Hi, bini', biniam);
temesghen.send('Hi everyone');


aki.send('Hello Tem, you are a great developer!', temesghen);