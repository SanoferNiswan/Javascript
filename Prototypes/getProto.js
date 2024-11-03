const car={
    name:"renault",
    color:"red"
}

let electricCar=Object.create(car);
console.log(electricCar)
console.log(car);
console.log(Object.getPrototypeOf(electricCar)===car);
console.log(Object.getPrototypeOf(electricCar));

