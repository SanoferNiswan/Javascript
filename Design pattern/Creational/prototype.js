const carPrototype = {
    startEngine: function() {
      console.log('Engine started');
    }
  };
  
  const myCar = Object.create(carPrototype);
  myCar.startEngine(); // Output: Engine started
  