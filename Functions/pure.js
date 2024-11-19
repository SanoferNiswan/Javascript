// pure
function add(a, b) {
    return a + b; // Output depends only on `a` and `b`
}

// impure
let count = 0;
function increment() {
    count++; // Modifies external state (side effect)
    return count;
}
