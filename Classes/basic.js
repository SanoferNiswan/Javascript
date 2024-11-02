class Rectangle{
    // setup instance properties
    constructor(h,w){
        console.log("Initiated");
        this.h=h;
        this.w=w;
    }
    area(){
        return this.h*this.w;
    }
}

let rec1=new Rectangle(4,5);
console.log(rec1);
console.log(rec1.area()); // if we use get or set --> no need of paranthesis


let rec2=new Rectangle(9,2);
console.log(rec2);
console.log(rec2.area());

class Square{
    constructor(h){
        console.log("Initiated");
        this.h=h;
    }
    get area(){
        return this.h*this.h;
    }
    set area(area){
        this.h=Math.sqrt(area);
        console.log(sq1.area);
    }
}

let sq1=new Square(4);
console.log(sq1);
console.log(sq1.area); // if we use get or set --> no need of paranthesis
//set
sq1.area=25;
console.log(sq1.area);


let sq2=new Square(9);
console.log(sq2);
console.log(sq2.area);

