// Returns a new function with a bound this, used later
// The bind() method creates a new function with a permanently set this context and optional preset arguments. 
// Unlike call and apply, bind does not immediately invoke the function.

// 1 create partially applied functions
function multiply(a,b){
    return a*b;
}
const double=multiply.bind(null,2);
console.log(double(5));
console.log(double(10));



// 2 borrow methods

let user1={
    fname:"sano",
    lname:"niswan",
    print:function(){
        console.log(this.fname,this.lname);
        
    }
}

const user2={fname:"rosan",lname:"akthar"};
const borrow=user1.print.bind(user2);
// console.log(borrow());
borrow();


// 2 settimeout

/*Explanation : Using bind(this) ensures that when tick() is called by 
setInterval,this still refers to the instance of Timer. 
Without it, this would not point to the Timer object, 
and you wouldn't be able to access this.seconds, resulting in an error. */

class Timer {
    constructor() {
        this.seconds = 0;
    }

    start() {
        setInterval(this.tick.bind(this), 1000); // Bind 'this' to the Timer instance
    }

    tick() {
        this.seconds++;
        console.log(this.seconds);
    }
}

const timer = new Timer();
// timer.start(); // Logs 1, 2, 3, ... every second


// To achieve this behaviour we can simply use arrow functionz
//Arrow functions do not have their own this context; they inherit this from the enclosing lexical context. 
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


// if no bind or arrow function ---> only in settimeout() and settimeinterval()
// strict mode---> this - undefined
// non strict mode ---> this - global object