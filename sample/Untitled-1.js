// const str1 = "sanu"
// str1
// const str2 = 'kjfsnkdjg'+str1+'nsdgvkjgs'
// str2
// const str = new String("kjnsgkjnvjks")
// str
// const str3 = `knkj`
// str3

// function test(name, yt, url){
//     console.log(name, yt, url);
// }
// const name = "HBJHVG"
// const yt = "jhbjhbj"
// const url = "hjvjhxcgfchgvhg"
// test `hello how are you ${str1} sanulifestyle`


// const sum =  (...arguments) => {
//     let s = 0;
//     for(let i of arguments){
//         s+=i;
//         console.log(i);
        
//     }
//     console.log(s);
// }

// sum(1,2,3,4);

// Constructor function
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// // Adding a method to the prototype
// Person.prototype.greet = function() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// };

// // Creating a new object
// const person1 = new Person('Alice', 30);
// person1.greet();  // Output: Hello, my name is Alice and I am 30 years old.


// function showPrimes(n) {
//     nextPrime: for (let i = 2; i < n; i++) {
  
//       for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//       }
  
//       alert( i ); // a prime
//     }
//   }

//   showPrimes(12);

typeof(1);
typeof 1;

//async function

async function fetchData() {
  let response = await fetch('https://api.example.com');
  let data = await response.json();
  console.log(data);
}


//generator function


function* infiniteSequence() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const sequence = infiniteSequence();
console.log(sequence.next().value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2


//shallow copy
let original = {
  name: "John",
  address: {
      city: "New York"
  }
};

// Creating a shallow copy using Object.assign
let shallowCopy = Object.assign({}, original);

shallowCopy.name = "Doe"; // Modifies the copy only
shallowCopy.address.city = "Los Angeles"; // Modifies the original as well

console.log(original.name);        // "John" - no change
console.log(original.address.city); // "Los Angeles" - modified because of shallow copy


//deep copy

let org = {
  name: "John",
  address: {
      city: "New York"
  }
};

// Creating a deep copy using JSON methods
let deepCopy = JSON.parse(JSON.stringify(org));

deepCopy.name = "Doe"; // Modifies the copy only
deepCopy.address.city = "Los Angeles"; // Only modifies the copy

console.log(org.name);        // "John" - no change
console.log(org.address.city); // "New York" - no change


