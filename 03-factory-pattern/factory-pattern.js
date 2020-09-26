function MemberFactory() {
  this.createMember = function(name, type) {
    let member;

    if(type === 'simple') {
      member = new SimpleMembership(name);
    } else if(type === 'standard') {
      member = new StandardMembership(name);
    } else if(type === 'super') {
      member = new SuperMembership(name);
    }

    member.type = type;

    member.define = function() {
      return(`${this.name}(${this.type}: ${this.cost})`)
    }

    return member;
  }

  const SimpleMembership = function(name) {
    this.name = name;
    this.cost = '$5';
  }

  const StandardMembership = function(name) {
    this.name = name;
    this.cost = '$5';
  }

  const SuperMembership = function(name) {
    this.name = name;
    this.cost = '$25';
  }

}


members = [];

const factory = new MemberFactory();
members.push(factory.createMember('john doe', 'simple'));
members.push(factory.createMember('jane doe', 'standard'));
members.push(factory.createMember('temesghen tekeste', 'super'));

const div = document.querySelector('div');

members.forEach(member => {
  div.innerHTML += `
    <span>Name: ${member.define()}</span><br>
    <hr>
  `;
});

console.log(members);


