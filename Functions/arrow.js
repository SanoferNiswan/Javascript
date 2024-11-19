// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;



// Concise Syntax

const multiply = (a, b) => a * b;


// Implicit Return:

const greet = name => `Hello, ${name}!`;
console.log(greet("John")); // Output: Hello, John!


// No this Binding:

const obj = {
    value: 10,
    getValue: function() {
        const inner = () => this.value;
        return inner();
    }
};
console.log(obj.getValue()); // Output: 10


// No arguments Object:

const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3)); // Output: 6



// Always Anonymous:

const nums = [1, 2, 3];
const squares = nums.map(num => num * num);
console.log(squares); // Output: [1, 4, 9]
