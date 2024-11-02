// Static class methods are defined on the class itself.
// You cannot call a static method on an object, only on an object class.
// helper functions

class Square{
    constructor(h){
        console.log("Initiated");
        this.h=h;
    }
    area(){
        return this.h*this.h;
    }
    static equals(a,b){ //doesnt belong to any obj,(only belongs to class as whole)
        return a.h===b.h;
    }
}

let sq1=new Square(4);
console.log(sq1);

let sq2=new Square(4);
console.log(sq2);

console.log(Square.equals(sq1,sq2));
