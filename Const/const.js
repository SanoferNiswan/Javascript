/*
When you declare a variable using const in JavaScript, you are making the variable reference immutable, 
meaning you cannot reassign the variable to a new value. 
However, the contents of the object or array that the const variable points to can still be modified
*/


const user={
    name:"sano",
    age:21,
    "has money":true
}

user.salary=1000;
console.log(user);


Object.freeze(user); // this is used to prevent modification




const arr=[];
arr.push(19);
console.log(arr);

// not alllowed
// arr=[10,20];
console.log(arr);





const myFunction = function() {
    console.log("Hello");
};

// Adding a property to the function
myFunction.description = "This is a greeting function.";
console.log(myFunction.description); // "This is a greeting function."

// Modifying the property
myFunction.description = "Updated description.";
console.log(myFunction.description); // "Updated description."


// this cannot be Allowed
myFunction=function(){
    console.log("modified");
    
}