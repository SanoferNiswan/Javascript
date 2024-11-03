let a=[1,2,3]
let x={
    name:"sano",
    age:21,
    print(){
        console.log(this.name,this.age);
    }
}
let z=function(){
    console.log(x.name);
    
}
z();


// below are same --> array prototype
console.log(a.__proto__);
console.log(Array.prototype);


// below are same
console.log(z.__proto__); // --> function prototype
console.log(Function.prototype);

// below are same ---> object prototype
console.log(a.__proto__.__proto__);  // protype chaning
console.log(z.__proto__.__proto__);  // protype chaning
console.log(x.__proto__);
console.log(Object.prototype);


// below are same ---> null prototype
// array --> object -->null
// function -->object -->null
console.log(x.__proto__.__proto__); // -------> null protype(object)-->null
console.log(a.__proto__.__proto__.__proto__);  
console.log(z.__proto__.__proto__.__proto__); 




// protypal inheritance
let Person={
    name:"sano",
    age:21,
    print(){
        console.log(this.name,this.age);
        
    }
}

let Person2={
    name:"rose"
}


// Never do this
Person2.__proto__=Person  //this works as same but this is wrong way
