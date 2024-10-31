// function myFunction( {
//     console.log("Hello");
// } // SyntaxError: Unexpected token '{'

// let obj;
// console.log(obj.property); // TypeError: Cannot read property 'property' of undefined

function checkValue(value) {
    if (value < 0) {
        throw new Error("Value cannot be negative");
    }
    return value;
}

try {
    checkValue(-1);
} catch (error) {
    console.error(error.message); // "Value cannot be negative"
}


// Custom Error Classes
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError"; // Custom name for the error
    }
}

try {
    throw new ValidationError("Invalid input");
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}


// 3. Error Handling in Asynchronous Code
fetch('https://fake-json-api.mock.beeceptor.com/users') // use invalid here
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        console.log(response.json);        
        return response.json();
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });


    fetch("url").then(response =>{
        if(!response.ok){ throw new Error("invalid url")}
        return response.json;
    }).catch(error =>{
        console.error(error);
    })