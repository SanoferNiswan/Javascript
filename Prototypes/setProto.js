const animal={
    eat(){
        console.log("eat");
        
    }
}

const bird={
    fly(){
        console.log("fly");
        
    }
}

console.log(bird.fly());
console.log(bird);

Object.setPrototypeOf(bird,animal);
bird.eat();
bird.fly();
console.log(Object.getPrototypeOf(bird));

animal.eat();
