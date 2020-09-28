// User
class User {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }
  send(message, to) {
    this.chatroom.send(message, this, to);
  }

  recieve(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}


// Chatroom
class Chatroom {
  constructor() {
    this.users = {};
  }

  register(user) {
    this.users[user.name] = user;
    user.chatroom = this;
  }

  send(message, from, to) {
    if(to) {
      // Single user message
      to.recieve(message, from);
    }else {
      // Mass message
      for (const key in this.users) {
        if (this.users[key] !== from) {
          this.users[key].recieve(message, from);            
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