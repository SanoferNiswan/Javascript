// adding property dynamically
property="salary";
name=200000

const user={
    name:"sano",
    age:21,
    [property]:name,
    "has money":true
}

user.dob="10/11/2003";
console.log(user);
console.log(user["has money"]);
// dynamic property
console.log(user.salary);

delete user.dob;
console.log(user);

// iterating objects --> for in loop

for(let key in user){
    console.log(key+":"+user[key]);
    
}

mul(user);
console.log(user);


// multiply all num property into 2
function mul(obj){
    for(let key in obj){
        if(typeof obj[key]==="number"){
            obj[key]*=2;
        }
    }
}


// guess the op
const a={};
const b={key:"b"};
const c={key:"c"};
a[b]=123;
a[c]=456
console.log(a[b]);   // ---> 456
console.log(a);


// json.stringify vs parse

let string=JSON.stringify(user);
console.log(string);
// localStorage.setItem("key",string);
console.log(JSON.parse(string));


// guess op

console.log(..."sanofer"); // spread operator spreads into character

let u={
    surname:"niswan",
    ...user
}
console.log(u);



// destructuring in objects
// extract particular value and store 
// let {name}=user --> this is also correct
let {name:myName}=user;
console.log(myName);

//nested obj - destructuring
let person={
    name:"sano",
    age:21,
    properties:{
        fname:"sanofer",
        lname:"niswan"
    }
}

// let {properties:fname}=person; --> retrives entire property object
let {properties:{fname}}=person;
let {properties:{lname}}=person;
console.log(fname,lname);


// object independent and refer to dif loc --> compare by reference not by value
console.log({a:1}=={a:1});     // false
// console.log({a:1}==={a:1}); // false











Object.freeze(user); // this is used to prevent modification


