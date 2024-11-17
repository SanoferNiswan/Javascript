class Car {
    constructor() {
      this.make = '';
      this.model = '';
      this.color = '';
    }
  }
  
  class CarBuilder {
    constructor() {
      this.car = new Car();
    }
  
    setMake(make) {
      this.car.make = make;
      return this;
    }
  
    setModel(model) {
      this.car.model = model;
      return this;
    }
  
    setColor(color) {
      this.car.color = color;
      return this;
    }
  
    build() {
      return this.car;
    }
  }
  
  
  const car = new CarBuilder()
    .setMake('Honda')
    .setModel('Civic')
    .setColor('Red')
    .build();
  
  console.log(car); // Output: Car { make: 'Honda', model: 'Civic', color: 'Red' }
  