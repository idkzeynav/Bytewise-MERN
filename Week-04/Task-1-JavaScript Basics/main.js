// Adding comments
// This is a single line comment

/*This is a multi-line comment*/

// Variables
let myVariable = "Hello, World!";
console.log(myVariable);

// Data types
let number = 42; // Number
let string = "JavaScript"; // String
let boolean = true; // Boolean
let array = [1, 2, 3]; // Array
let object = { name: "Alice", age: 25 }; // Object

// Operators
let sum = 10 + 5; // Addition
let product = 10 * 5; // Multiplication
let difference = 10 - 5; // Subtraction
let quotient = 10 / 5; // Division

console.log(sum, product, difference, quotient);

// Type Conversions
let num = "42";
let convertedNum = Number(num); // Converts string to number
console.log(convertedNum);

// Equality
let x = 5;
let y = "5";

console.log(x == y); // true, because == only checks value
console.log(x === y); // false, because === checks value and type

// Conditional statements
if (x === 5) {
    console.log("x is 5");
} else {
    console.log("x is not 5");
}

// Looping code
for (let i = 0; i < 5; i++) {
    console.log("The number is " + i);
}

let j = 0;
while (j < 5) {
    console.log("j is " + j);
    j++;
}

// Functions
function greet(name) {
    return "Hello, " + name;
}

console.log(greet("Alice"));

// Scope
let globalVar = "I'm a global variable";

function scopeTest() {
    let localVar = "I'm a local variable";
    console.log(globalVar); // Can access global variable
    console.log(localVar);  // Can access local variable
}

scopeTest();
// console.log(localVar); // Error: localVar is not defined

console.log(globalVar); // Can access global variable
