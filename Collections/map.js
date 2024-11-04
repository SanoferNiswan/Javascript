let map = new Map();
map.set("name", "Alice");
map.set("age", 25);
console.log(map.get("name")); // "Alice"
console.log(map.size); // 2
console.log(map);


let person = { name: "John" };
let details = new Map();
details.set(person, { age: 30, job: "developer" });
console.log(details.get(person)); // { age: 30, job: "developer" }
