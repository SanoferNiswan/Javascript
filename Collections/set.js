let set = new Set();
set.add(1);
set.add(2);
set.add(2); // Duplicate, won't be added
console.log(set.size); // 2
console.log(set.has(1)); // true
set.delete(1); // Removes 1 from the set
