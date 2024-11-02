// let a=new Array();
// 1 concat-->merge 2 or more arrays --> doesnt modify exisiting 
a=[1,2,3,4];
b=[5,6,7,8];

console.log("\nconcatenated array ");

let x=a.concat(b,a,b);
let y=a.concat(1,2,3,b);
console.log(x+" \n5th index: "+x[5]);
console.log(y);

// just need copy of arrey
let copy=a.concat();
console.log("\ncopy of a:"+copy);


// 2 length
console.log("\nlenght:"+x.length);


// 3 slice-->returns shallow copy of portion of array
// shallow copy --> it doesnt affect the original array
// just copy
const a2=a.slice(1,4);
console.log("\nsliced array : "+a2);
console.log(a.slice(-2)); // last 2 element
console.log(a.slice(-3,4));
console.log(a.slice(2)); // takes all the elemnt from index


// 4 find 
let color=['red','blue','green','red','red','green'];
console.log(color.find((x)=>x==="red")); // op: red


// 5 findIndex
console.log(a.findIndex((x)=>x===2)); // op: 1

// 6 indexOf --> returns first index of element [no element --> (-1)]
color=['red','blue','green','red','red','green'];
const rind=color.indexOf('red');
//we can replace
color[rind]='violet';
console.log("index of red "+rind);
console.log("index of green "+color.indexOf('green'));
console.log(color);



// 7 lastIndexOf
console.log("last index of green "+color.lastIndexOf('green'));


// 8 some (or)
let n3=[-1,-2,-3,-4,-9,10];
let n4=[-1,-2,-3];
function isPositive(n){
    return n>0;
}
console.log(n3.some(isPositive));
console.log(n4.some(isPositive));

// 9 every ---> true or false (and)
// check particular condition for each element in array
// syntax: array.every(callback fn)
// callback--> 3 args --> element,indx,arr
let n1=[1,2,3,4,-9,10];
let n2=[1,2,3];
function isPositive(n){
    return n>0;
}
console.log(n1.every(isPositive));
console.log(n2.every(isPositive));

const arrays=[
    [1,2,3],
    "23",
    [4,5,6]
]
console.log(arrays.every(arr=>Array.isArray(arr)));



// 10 includes --> returns true or false
let fruits=["apple","orange","banana"];
console.log("includes:\n"+fruits.includes("aplle"));
console.log(fruits.includes("apple"));


// 11 push
a.push(10);
a.push(11,12,13,14,15);
console.log("\n10 is pushed "+a);

// 12 unshift --> returns length of array
a.unshift(0);
a.unshift(2);
let len=a.unshift(2,4);
console.log("\nunshift of 0 and 2: "+a+" Length "+len);


// 13 pop
let lastnum=a.pop();
console.log(lastnum+" After popped");
console.log(a);

// 14 shift
let firstnum=a.shift();
console.log(firstnum+" After shift");
console.log(a);


// 15 toString -->  returns a string representation
//  represent numbers in different bases (radix).
const number = 255;
console.log(number.toString()); // Output: "255"
console.log(a.toString()); // Output: "1,2,3"

console.log(number.toString(2));  // Output: "11111111" (binary)
console.log(number.toString(8));  // Output: "377" (octal)
console.log(number.toString(16)); // Output: "ff" (hexadecimal)

const obj = { key: 'value' };
console.log(obj.toString()); // Output: "[object Object]"

// Custom toString
const customObj = {
  key: 'value',
  toString: function() {
    return `Custom Object with key: ${this.key}`;
  }
};
console.log(customObj.toString()); // Output: "Custom Object with key: value"

function greet() {
    return 'Hello, world!';
  }
console.log(greet.toString()); // Output: "function greet() { return 'Hello, world!'; }"
  

// 16 join --> create new string by concatenating all elements of array
// we can concat by inbetween special character(separator)
const res1=fruits.join(); // default --> comma
const res2=fruits.join(' ');
const res3=fruits.join(' $$ ');
console.log(res1+"\n"+res2+"\n"+res3);



// 17 fill --> modify entire array
const num=[1,2,3,4,5];
num.fill(10);
console.log("\nfill with 10 : "+num);
// syntax array.fill(number,startindex,endindex);
num.fill(3,2,4);
console.log(num);

// fillin numbers
function fillIn(n){
    return Array(n).fill(0).map((y,x)=>x+1);
}
// y-->actual value(0)  x-->index values(0,1,2,3,...)
console.log("\nArrays full of numbers by fill method:"+fillIn(20));




// 18 copyWithin-->shallow copies part of an array to another location in the same array.
//Copy elements starting from index 3 to index 5, and place them starting from index 0.
const a = [1, 2, 3, 4, 5];
a.copyWithin(0, 3, 5);
console.log(a); // Output: [4, 5, 3, 4, 5]



// 19 splice -->remove from particular index --> also can add elements
//remove and modify the existing array
// array.splice(index,no of elements to remove);-->syntax
let deleted=a.splice(2,2);
console.log("after splice: "+a+" Deleted part:"+deleted);
// adding elements
a.splice(3,0,6,7,8,9,10);
console.log(a);







// 20 sort --> change the existuing array
let name=['sano','rose','riyaz'];
let rand=[4,3,65,87,98,23];

name.sort(); // it sort based on string sorting --> consider each as a string
rand.sort();
console.log("sorted:"+name+" "+rand);

// to make it work properly
function compare(a,b){return a-b};
function desc(a,b){return b-a};
rand.sort(compare); // or rand.sort((a,b)=>a-b)
console.log(rand); // ascending order
rand.sort(desc);
console.log(rand);  // descending order

const product=[
    {
        name:"laptop",
        rate:60000
    },
    {
        name:"mobile",
        rate:20000
    },
    {
        name:"tv",
        rate:90000
    }
];

product.sort((a,b)=>a.rate-b.rate);
console.log(product);





// 21 reverse --> affecting originaL
// To perform reverse on separate we can copy using concat
let arr=[1,2,3,4];
let revarr=arr.concat().reverse();
// or let revarr=[...arr].reverse();
console.log(" original array "+arr+" reverse of array "+revarr);
// reverse on string --> split() and join()
let str="sanofer niswan is crazy";
const res=str.split('').reverse().join(' ');
console.log(res);
// split()-->convert to array of char
//join() translate to string again


// 22 from
const s='1234567';
const result=Array.from(s,(x)=>Number(x));
console.log(s+" string to array by 'from()' "+result);

// remove duplicates
const numberss=[1,2,3,3,2,1,4,5,6,5];
const dup1=new Set(numberss);
const dup2=Array.from(new Set(numberss))
console.log(dup1);
console.log(dup2);


// 23 isArray
const array=[
    [1,2,3],
    "23",
    [4,5,6]
]
console.log(array.map(arr=>Array.isArray(arr)));

// 24 valueOf-->returns the primitive value of the specified object.
const numm = new Number(24);
console.log(numm.valueOf()); // Output: 24

const date = new Date();
console.log(date.valueOf()); // Output: The number of milliseconds since January 1, 1970


// 25 entries --> returns a new Array Iterator object 
// that contains key/value pairs for each index in the array.
const araray = ['a', 'b', 'c'];
const iterator = araray.entries();

for (let entry of iterator) {
  console.log(entry);
}
// Output: 
// [0, 'a']
// [1, 'b']
// [2, 'c']


// 26 keys --> returns a new Array Iterator object that contains the keys for each index in the array. 
const a3 = ['x', 'y', 'z'];
const keys = a3.keys();

for (let key of keys) {
  console.log(key);
}
// Output:
// 0
// 1
// 2



// 27 values-->returns a new Array Iterator object that contains the values for each index in the array.
const a4 = ['apple', 'banana', 'cherry'];
const values = a4.values();

for (let value of values) {
  console.log(value);
}
// Output:
// "apple"
// "banana"
// "cherry"


// 28 reduce
const users=[
    {fname:"sanofer",lname:"niswan",age:20},
    {fname:"rosan",lname:"akthar",age:20},
    {fname:"mohamed",lname:"riyaz",age:24},
    {fname:"sulaiman",lname:"sait",age:40},
];
//{20:2,24:1,40:1} --> reduce
const ages=users.reduce((acc,curr)=>{
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
    }
    else{
        acc[curr.age]=1;
    }
    return acc;
},{});

console.log(ages);


// 29 reduceRight
const a5 = [1, 2, 3, 4];
const r = a5.reduceRight((accumulator, currentValue) => accumulator + currentValue);
console.log(r); // Output: 10


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



// practice : 2490. Circular Sentence