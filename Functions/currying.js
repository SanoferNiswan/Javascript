/* Instead of taking all arguments at once, a curried function takes the first argument, 
returns a new function that takes the second argument, and so on, until all arguments have been provided. */

// presetting values to the arguments

// method 1 : use bind() for currying

let multiply=function(x,y){
    console.log(x*y);
}

const product2=multiply.bind(this,2);
product2(9);
const product3=multiply.bind(this,3);
product3(7);

// method 2 : use closures for currying
let product=function(x){
    return function(y){
        console.log(x*y);
    }
}

let x=product(10);
x(20);
product(2)(5);



// more examples

// Normal function that takes three arguments
function add(a, b, c) {
    return a + b + c;
}

console.log(add(1, 2, 3)); // Outputs: 6

// Curried version of the same function
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(curriedAdd(1)(2)(3)); // Outputs: 6



// Real-World Example

// Non-curried function
function calculateTax(taxRate, amount) {
    return amount * taxRate;
}

console.log(calculateTax(0.1, 100)); // Outputs: 10


function curriedCalculateTax(taxRate) {
    return function(amount) {
        return amount * taxRate;
    };
}

const calculateVAT = curriedCalculateTax(0.2); // 20% VAT
console.log(calculateVAT(100)); // Outputs: 20

const calculateSalesTax = curriedCalculateTax(0.1); // 10% Sales Tax
console.log(calculateSalesTax(100)); // Outputs: 10







