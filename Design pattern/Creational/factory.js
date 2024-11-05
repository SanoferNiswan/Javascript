class Car {
    constructor() {
      this.type = 'Car';
    }
  }
  
  class Truck {
    constructor() {
      this.type = 'Truck';
    }
  }
  
  class VehicleFactory {
    createVehicle(vehicleType) {
      if (vehicleType === 'car') {
        return new Car();
      } else if (vehicleType === 'truck') {
        return new Truck();
      }
    }
  }
  
  const factory = new VehicleFactory();
  const myCar = factory.createVehicle('car');
  console.log(myCar.type); // Output: Car
  