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
