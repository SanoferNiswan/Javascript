class Animal{
    constructor(name){
        this.name=name;
    }

    makeSound(){
        console.log("Generic animal sound");        
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }

    makeSound(){
        super.makeSound(); 
        console.log("Woof Woof..!");
        
    }
}

const a1=new Animal("buffalo");
a1.makeSound();

const a2=new Dog("kamal");
a2.makeSound();

// overloading is not possible in js
class Addition{
    sum(a,b){
        console.log(a+b);
    }
    sum(a,b,c){
        console.log(a+b+c);
    }
    sum(a,b,c,d){
        console.log(a+b+c+d);
    }
}

const x=new Addition();
x.sum(1,2);
x.sum(1,2,3);
x.sum(1,2,3,4);



class Add{
    sum(...args){
        let res=args.reduce((acc,curr)=>acc+curr,0)
        return res;
    }
}

let a4=new Add();
console.log(a4.sum(1,2,3,4,5,6,7));


