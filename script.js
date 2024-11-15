myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;

// the loop has to start at 0, changed i = 1 to i = 0
//  changed "i <= myGrades.length" to "i <= 6" because 6 is the total length of the code (since it starts at 0 and ends at 6) and the output can be less than or equal to one of the array numbers 
for (let i = 0; i <= 6; i++) {

myAverage += myGrades[i];

}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage); // output: 88.71428571428571



// Write a function that accepts a number from 0-100.
function myCode(i) {
    if (i >= 0 && i <= 100) {
        console.log(i + " is valid");
    } else {
        console.log("invalid");
    }
}

myCode(35);  // output: 35 is valid
myCode(150); // output: invalid

// Your function should reject input (throw an exception) if:
// The value is not a number
// Is less than 0 
// Is greater than 100
 
function myCar(i) {
    if (typeof i !== 'number') {
        throw new Error("Numbers only!");
        
    }
    if (i < 0 || i > 100) {
        throw new Error("Only numbers 0-100 are accepted");
        
    }
    console.log(i + " is valid");
}

try {
    myCar(80); // output: 80 is valid
    myCar(500); // Error: Only numbers 0-100 are accepted
}   catch (error)  {
    console.log(error);
}

// Once you have that code working, create a new custom exception and throw that instead of a generic exception.
class ErrorNumber extends Error {
    constructor(message, numbers) {
        super(message);
        this.property = "ErrorNumber";
        this.numbers = numbers; 
    }
}

function myLaptop(b) {
    if (typeof b !== 'number') {
        throw new ErrorNumber("Only Numbers allowed.");
    }
    if (b < 0 || b > 100) {
        throw new ErrorNumber("Only numbers from 0-100 allowed");
    }
    console.log(b + " is valid");
}


//Once you have that working, write code that handles the exception and then call your function.
try {
    myLaptop("hi"); // Output: Only Numbers allowed.
    
} catch (error) {
    if (error instanceof ErrorNumber) {
        console.error(`${error.message} numbers({$error.numbers}) ${error.property}`)
    } else {
        console.error("idk " + error.message);
    }
}   

try {
    myLaptop(200); // Output: Only numbers from 0-100 allowed numbers
    
} catch (error) {
    if (error instanceof ErrorNumber) {
        console.error(`${error.message} numbers({$error.numbers}) ${error.property}`)
    } else {
        console.error("idk " + error.message);
    }
}   

try {
    myLaptop(10); // Output: 10 is valid
    
} catch (error) {
    if (error instanceof ErrorNumber) {
        console.error(`${error.message} numbers({$error.numbers}) ${error.property}`)
    } else {
        console.error("idk " + error.message);
    }
}   