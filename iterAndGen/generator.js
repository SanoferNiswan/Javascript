function* generator() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const gen = generator(); // Create the generator object
  
  // Using the generator
  console.log(gen.next()); // { value: 1, done: false }
  console.log(gen.next()); // { value: 2, done: false }
  console.log(gen.next()); // { value: 3, done: false }
  console.log(gen.next()); // { value: undefined, done: true }

  for(let gene of gen){
    console.log(gene);
    
  }



  function* dataStream() {
    let data = 1; // Starting value for the data stream

    while (true) { // Infinite loop to simulate continuous data
        yield `Data chunk ${data}`; // Yield each data chunk
        data++;
        
        // Simulate a delay between data chunks
        yield new Promise(resolve => setTimeout(resolve, 1000));
    }
}

// Using the generator
const stream = dataStream();

function processNextChunk() {
    const result = stream.next(); // Get the next chunk of data

    if (!result.done) {
        if (result.value instanceof Promise) {
            // If the value is a Promise (simulating a delay), wait for it
            result.value.then(processNextChunk);
        } else {
            // Otherwise, process the data chunk
            console.log(result.value);
            processNextChunk(); // Recursively process the next chunk
        }
    }
}

// Start processing the data stream
processNextChunk();
