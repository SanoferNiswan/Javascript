// 30 flat
let ar=[1,[2,3],[3,[4,[5,[6]]]]];
console.log(ar);
console.log(ar.flat());
console.log(ar.flat(2));
console.log(ar.flat(3));
console.log(ar.flat(5));
console.log(ar.flat(Infinity));



// 31 flatMap
const a6 = [1, 2, 3];
const results = a6.flatMap(x => [x, x * 2]);
console.log(results); // Output: [1, 2, 2, 4, 3, 6]