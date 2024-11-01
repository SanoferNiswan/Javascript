(function() {
    // IIFE Scope
    let counter = 0; // Counter is now contained within the IIFE

    function incrementCounter() {
        counter++; // Works with IIFE's `counter`, not a global variable
    }

    function showCounter() {
        console.log("Counter:", counter); // Displays the IIFE's `counter`
    }

    incrementCounter();
    showCounter(); // Counter: 1
})();

// Outside the IIFE:
console.log(typeof counter); // undefined - No global `counter` variable exists



(function() {
    let message = "Hello, IIFE!";
    console.log(message);
})(); // No explicit call needed
