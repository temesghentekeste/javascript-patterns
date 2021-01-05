const Player = (name, level) => {
  let health = level * 2;
  const getLevel = () => level;
  const getName = () => name;
  const die = () => {
    // uh oh
  };

  const damage = (x) => {
    health -= x;
    if (health <= 0) {
      die();
    }
  };

  const attack = (enemy) => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    }
    if (level >= enemy.getLevel()) {
      enemy.damage(1);
      console.log(`${name} has damaged ${enemy.getName()}`);
    }
  };
  return { attack, damage, getLevel, getName };
};

const jimmie = Player('jim', 10);
const badGuy = Player('jeff', 5);
jimmie.attack(badGuy);
console.log(jimmie.getLevel());


const Person = name => {
  const sayName = () => console.log(`My name is ${name}`);

  return { sayName }
}

const Nerd = name => {
  const {sayName} = Person(name);

  const someNerdyStuff = () => console.log('Some nerdy stuff');

  return { sayName, someNerdyStuff}
}


const tom =  Nerd('Tom')

tom.sayName();
tom.someNerdyStuff();