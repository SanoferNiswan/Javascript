// Creating a function that creates objects
function createObject() {
    const obj = {
        name: "Alice",
        age: 30
    };
    return obj;
}

// Example of memory allocation
let person1 = createObject(); // Memory allocated for person1
let person2 = createObject(); // Memory allocated for person2

// Let's create a reference to person1
let anotherReference = person1;

// At this point, the memory for person1 is still in use
console.log(person1); // Output: { name: 'Alice', age: 30 }

// Now we can remove the reference
person1 = null; // Removing the reference to person1

// At this point, person1 is not accessible anymore, but anotherReference still points to it
console.log(anotherReference); // Output: { name: 'Alice', age: 30 }

// If we remove the last reference to the object:
anotherReference = null; // Now both references are gone

// The object that was created is now eligible for garbage collection
// It can be done automaticaly
