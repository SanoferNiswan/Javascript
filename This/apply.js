// like call() but takes array of arguments
// This is common in mathematical operations or with APIs expecting parameterized inputs.

let num=[3,4,7,6,9,4,90,98,89];
const max=Math.max.apply(null,num);
console.log(max); //op:98

const messages = ["Error:", "User ID", "not found"];
console.log.apply(console, messages); // Outputs: "Error: User ID not found"


