//Activity 1
//Task1

var value = 10;
console.log(value);

//Task 2

var letters = "Vineet";
console.log(letters);

//Activity 2
//Task3

const result = false;
console.log(result);

//Activity 3
// Task 4

var pop = 10;
var name = "bob";
var fruits = [1, 1, 3];
var json = {
  fname: "Vineet",
  age: 21,
};

console.log(typeof pop);
console.log(typeof name);
console.log(typeof fruits);
console.log(typeof json);

//Activity 4
//Task 5

let YT = "Chai Aur JS";
let New_YT = "Chai Aur DSA";

console.log(YT);
console.log(New_YT);

//Activity 5
//Task 6

const color = "White";
// const color = "White";

console.log(color); //error identifier color is already declared

//*Feature Request
//*1)
const CheckType = (value) => {
  console.log(
    "The value is" + " " + value + " And the data type is" + " " + typeof value
  );
};

CheckType(2);
CheckType((obj = { name: "Hello" }));

//*2)

// let example
let age = 25;
console.log("Initial age with let:", age); // Initial age with let: 25

age = 26; // Reassigning value to age
console.log("Updated age with let:", age); // Updated age with let: 26

// const example
const birthYear = 1998;
console.log("Initial birthYear with const:", birthYear); // Initial birthYear with const: 1998

// birthYear = 1999; // Uncommenting this line will cause an error because birthYear is a constant

// Differences in block scope
if (true) {
  let blockScopeVar = "I am inside a block with let";
  console.log(blockScopeVar); // I am inside a block with let
}

// console.log(blockScopeVar); // Uncommenting this line will cause an error because blockScopeVar is not accessible outside the block

if (true) {
  const blockScopeConst = "I am inside a block with const";
  console.log(blockScopeConst); // I am inside a block with const
}

// console.log(blockScopeConst); // Uncommenting this line will cause an error because blockScopeConst is not accessible outside the block

// Attempting to reassign const object
const person = {
  name: "John",
  age: 30,
};
console.log("Initial person object with const:", person); // Initial person object with const: { name: 'John', age: 30 }

person.age = 31; // Allowed, because we are changing a property of the object, not reassigning the variable
console.log("Updated person object with const:", person); // Updated person object with const: { name: 'John', age: 31 }

// Attempting to reassign const object
// person = { name: "Jane", age: 25 }; // Uncommenting this line will cause an error because person is a constant
