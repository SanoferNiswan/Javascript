// prototypal Inheritance


function Animal1() {}
Animal1.prototype.speak = function() {
    console.log("Animal sound");
};

let dog = new Animal1();
dog.speak(); // "Animal sound"






function Animal2(name) {
    this.name = name;
  }
  
  Animal2.prototype.speak = function() {
    console.log(`${this.name} makes a sound.`);
  };
  
  const dogs = new Animal2('Buddy');
  dogs.speak(); // Output: "Buddy makes a sound."
  








  function Animal3(name) {
    this.name = name;
  }
  
  Animal3.prototype.speak = function() {
    console.log(`${this.name} makes a sound.`);
  };
  
  function Dog(name, breed) {
    Animal.call(this, name); // Call the Animal constructor
    this.breed = breed;
  }
  
  // Set Dog's prototype to be an instance of Animal
  Dog.prototype = Object.create(Animal3.prototype);
  
  // Set the constructor property back to Dog
  Dog.prototype.constructor = Dog;
  
  Dog.prototype.bark = function() {
    console.log(`${this.name} barks.`);
  };
  
  const dog2 = new Dog('Buddy', 'Golden Retriever');
  dog2.speak(); // Output: "Buddy makes a sound."
  dog2.bark();  // Output: "Buddy barks."
  




  // Example using __proto__

  const animal = {
    speak() {
      console.log('Animal sound');
    }
  };
  
  const dog3 = {
    bark() {
      console.log('Dog barks');
    }
  };
  
  dog3.__proto__ = animal; // Set the prototype of dog to animal
  
  dog3.bark();  // Output: "Dog barks"
  dog3.speak(); // Output: "Animal sound" (inherited from animal)
  
