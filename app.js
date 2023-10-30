class Cat {
    constructor(name, breed, age) {
      this.name = name;
      this.breed = breed;
      this.age = age;
    }
  
    // Method 1: A method to meow
    meow() {
      console.log(`${this.name} says meow!`);
    }
  
    // Method 2: A method to sleep
    sleep() {
      console.log(`${this.name} is sleeping.`);
    }
  
    // Method 3: A method to eat
    eat(food) {
      console.log(`${this.name} is eating ${food}.`);
    }
  }
  
  // Create two instances of the Cat class
  const cat1 = new Cat("Whiskers", "Siamese", 3);
  const cat2 = new Cat("Mittens", "Persian", 5);
  
  // Log properties of the Cat instances
  console.log(cat1);
  console.log(cat2);
  
  // Invoke methods on the Cat instances
  cat1.meow();
  cat2.sleep();
  cat1.eat("fish");
  cat2.eat("mice");
  
  class Pirate {
    constructor(name, rank, weapon) {
      this.name = name;
      this.rank = rank;
      this.weapon = weapon;
    }
  
    // Method 1: A method to talk like a pirate
    talkLikeAPirate() {
      console.log(`${this.name}, a ${this.rank}, says 'Arrr matey!'`);
    }
  
    // Method 2: A method to drink rum
    drinkRum() {
      console.log(`${this.name} is drinking rum.`);
    }
  
    // Method 3: A method to attack
    attack(target) {
      console.log(`${this.name} attacks ${target} with a ${this.weapon}.`);
    }
  }
  
  // Create arrays of Pirate instances
  const jollyRoger = [
    new Pirate("Captain Jack", "Captain", "cutlass"),
    new Pirate("Sparrow", "Crew Member", "pistol"),
    new Pirate("Blackbeard", "First Mate", "sword"),
  ];
  
  const blackPearl = [
    new Pirate("Barbossa", "Captain", "saber"),
    new Pirate("Will Turner", "Crew Member", "cutlass"),
    new Pirate("Anne Bonny", "First Mate", "knife"),
  ];
  
  // Loop over and print properties of the pirates
  jollyRoger.forEach(pirate => {
    console.log(`${pirate.name} is a ${pirate.rank} with a ${pirate.weapon}.`);
  });
  
  blackPearl.forEach(pirate => {
    console.log(`${pirate.name} is a ${pirate.rank} with a ${pirate.weapon}.`);
  });