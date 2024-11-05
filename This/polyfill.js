let name={
    fname:"sanofer",
    lname:"niswan"
}

let print=function(){
    console.log(this.fname+" "+this.lname);
    
}

const display=print.bind(name);
display();

//own implementation of bind method

Function.prototype.mybind = function(...args1){   //first arg-->thisarg others are dataparam
    let obj=this;
    params=args1.slice(1); // except 1st argument
    return function(args2){
        obj.apply(args1[0],[...params,...args2]);
    }
}

const display2=print.mybind(name);
display2("sano");