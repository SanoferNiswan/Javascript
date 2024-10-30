function def(){
    var y=10;
    console.log(y);
}
y
var y=11;

def()

function def(){
    y=10;
    // console.log(y);
}
// y
var y=11;
y
def()
y


let sayHi = function() {
    console.log("hi")
    return "Hello";
  };

 sayHi();
 console.log(sayHi());
  



//hoisted and enter into temporal dead zone
let x;
x
w
x=10
let w=20

//declaration only hoisted
z
var z=20

sayHello(); //fully hoisted
function sayHello() {
    console.log("Hello!");
  }

//call backs
  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "You agreed." );
  }
  
  function showCancel() {
    alert( "You canceled the execution." );
  }
  
  // usage: functions showOk, showCancel are passed as arguments to ask
  ask("Do you agree?", showOk, showCancel);
  
  //2  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); } )

    // function expression is not hoisted
    Hello();
    Hello 

    console.log(Hello());
    
    let Hello=function(){
        return "hello";
    }


    //polyfills

    if (!Math.trunc) { // if no such function
        // implement it
        Math.trunc = function(number) {
          // Math.ceil and Math.floor exist even in ancient JavaScript engines
          // they are covered later in the tutorial
          return number < 0 ? Math.ceil(number) : Math.floor(number);
        };
      }



//Arrow functions

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();


//normal

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );

  //arrow

  function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );