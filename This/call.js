// syntax functionName.call(thisArg, arg1, arg2, ...);
// used to reuse the method of one object to another object

let name={
    fname:"sano",
    lname:"niswan",
    print:function(){
        console.log(this.fname,this.lname);
        
    }
}

let name2={
    fname:"sanofer",
    lname:"niswan",
    // print:function(){
    //     console.log(this.fname,this.lname);
        
    // }
}

name.print();

//call method comes into play
// function borrowing
// Using call to borrow the print method
// name2.print();
name.print.call(name2);

function display(){
    console.log(`${this.name},${this.age},${this.area}`);
}

let user={
    name:"sano",
    age:21,
    area:"mdkm"
}
display.call(user);
