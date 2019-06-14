/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
    constructor(attributes){
      this.createdAt = attributes.createdAt;
      this.name = attributes.name;
      this.dimensions = attributes.dimensions;
  }
    destroy() {
      return `${this.name} was removed from the game.`;
  }
}


// this will be: CharacterStats, the child
  class CharacterStats extends GameObject {
    constructor(childAttributes) {
      super(childAttributes);
      this.healthPoints = childAttributes.healthPoints;
  }

  takeDamage() {
      return `${this.name} took damage.`
  }}

// this will be: Humanoid, the grandchild
  class Humanoid extends CharacterStats{
    constructor(grandchildAttributes) {
      super(grandchildAttributes);
      this.team = grandchildAttributes.team;
      this.weapons = grandchildAttributes.weapons;
      this.language = grandchildAttributes.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}.`
  }
  }

// this will be: Hero, the great-grandchild
  class Hero extends Humanoid {
    constructor(greatgrandchildAttributes) {
      super(greatgrandchildAttributes);
      this.smoothMove = greatgrandchildAttributes.smoothMove;
    }

    perservere() {
    return `I will use my ${this.smoothMove} to end you and bring victory to ${this.team}!`
  }
  }

// this will be: Villain, the great-grandchild
  class Villain extends Humanoid {
    constructor(greatgrandchildAttributes) {
      super(greatgrandchildAttributes);
      this.sneakyMove = greatgrandchildAttributes.sneakyMove;
    }
    powerMove() {
        return `${this.name} never gives up! This ${this.weapons} will end you!`
  }

}


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
    smoothMove: "Hiyah"
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const heroHannah = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 5,
      width: 3,
      height: 1,
    },
    healthPoints: 25,
    name: 'Hannah',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
    smoothMove: "Hiyah"
  });

  const villainVince = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 7,
      width: 4,
      height: 4,
    },
    healthPoints: 10,
    name: 'Vince',
    team: 'The Baddies',
    weapons: [
      'Giant Nunchuck',
    ],
    language: 'Common Tongue',
    sneakyMove: "Karate Chop"
  });


  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  console.log(heroHannah.smoothMove);
  console.log(heroHannah.perservere());
  console.log(villainVince.sneakyMove);
  console.log(villainVince.powerMove());
