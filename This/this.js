// console.log(window===this); //true --> refers to global scope

console.log(this);

function sano(){
    console.log(this);
    
}

//object
let user={
    fname:"sano",
    lname:"niswan",
    print:function(){
        console.log(this.fname,this.lname);
        console.log(this);
        
    }
}

user.print();
console.log(user);

//class
class Sample{

    constructor(name){
        this.name=name;
        console.log(this);
        
    }
    val=()=>{
        console.log(this.name);
    }
}

let sam=new Sample("sano");
sam.val();


//arrow function 1
class Person{

    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    greet(){
        setTimeout(()=>{
            console.log(`Hello ${this.name} : Your age is ${this.age}`);
             console.log(this);
             
        },2000)
    }
}

const user1=new Person("sano",21);
user1.greet();

//arrow function 2 
//Arrow functions do not have their own this context; they inherit this from the enclosing lexical context. 

// if no bind or arrow function ---> only in settimeout() and setinterval()
// strict mode---> this - undefined
// non strict mode ---> this - global object

class Timerr{
    constructor(){
        this.sec=0;
    }
    start(){
        setInterval(()=>{this.tick()},500);
    }
    tick(){
        this.sec++;
        console.log(this.sec);
        
    }
}

const tim=new Timerr();
tim.start();


//event listeners

// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//     console.log(this); // 'this' will refer to the lexical scope, not the button element
// });



// getters

const p = {
    firstName: 'John',
    lastName: 'Doe',
    
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(p.fullName); // Output: John Doe


// setters

const person = {
    firstName: 'John',
    lastName: 'Doe',
    
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    
    set fullName(name) {
        const parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'Jane Smith'; // Calls the setter
console.log(person.firstName); // Output: Jane
console.log(person.lastName); // Output: Smith


// with statement - syntax
// with (object) {
//     // Statements using properties of object
// }


const obj = {
    a: 1,
    b: 2,
    c: 3
};

with (obj) { // Statements using properties of object
    console.log(a + b + c); // Output: 6
}

/*Drawbacks: The with statement is often discouraged because it makes code harder to understand and can lead to performance issues. It can also cause confusion with variable scoping. */



