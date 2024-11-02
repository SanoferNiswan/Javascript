// parent and child classes

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    describe(){
        console.log(`my name is ${this.name} my age is ${this.age}`);
    }
}

class Programmer extends Person{

    constructor(name,age,language){
        super(name,age);
        this.language=language;
    }

    display(){
        super.describe();
        console.log(`I am well at ${this.language}`);
        
    }
}

let p1=new Person("sano",21);
p1.describe();
let prog1=new Programmer("rose",23,"java");
// console.log(p1+"\n"+prog1);
prog1.display();
prog1.describe();

const Programmers=[
    new Programmer("riyaz",25,'c#'),
    new Programmer("anu",21,'R'),
    new Programmer("narmadha",20,'AGRI'),
]

for(let prog of Programmers){
    prog.display();
}



// 1 single inheritance

class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const dog = new Dog('Buddy');
  dog.speak(); // Output: "Buddy makes a sound."
  dog.bark();  // Output: "Buddy barks."
  

// 2 multilevel inheritance

class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log(`${this.name} barks.`);
    }
  }
  
  class Labrador extends Dog {
    play() {
      console.log(`${this.name} loves to play.`);
    }
  }
  
  const lab = new Labrador('Charlie');
  lab.speak(); // Output: "Charlie makes a sound."
  lab.bark();  // Output: "Charlie barks."
  lab.play();  // Output: "Charlie loves to play."
  



//3. Hierarchical Inheritance

class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log(`${this.name} barks.`);
    }
  }
  
  class Cat extends Animal {
    meow() {
      console.log(`${this.name} meows.`);
    }
  }
  
  const dogg = new Dog('Buddy');
  dogg.speak(); // Output: "Buddy makes a sound."
  dogg.bark();  // Output: "Buddy barks."
  
  const cat = new Cat('Whiskers');
  cat.speak(); // Output: "Whiskers makes a sound."
  cat.meow();  // Output: "Whiskers meows."
  


// 4. Multiple Inheritance (Not Directly Supported)
// JavaScript does not support multiple inheritance directly (where a class inherits from more than one class).
// However, this can be simulated using Mixins.

const canEat = {
    eat() {
      console.log(`${this.name} is eating.`);
    }
  };
  
  const canWalk = {
    walk() {
      console.log(`${this.name} is walking.`);
    }
  };
  
  class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  Object.assign(Person.prototype, canEat, canWalk);
  
  const person = new Person('John');
  person.eat(); // Output: "John is eating."
  person.walk(); // Output: "John is walking."
  