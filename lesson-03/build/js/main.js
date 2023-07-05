"use strict";
let stringArr = ["one", "two", "three"];
stringArr[0] = "john";
// stringArr[0] = 5; --ERROR
// stringArr.push(45); --ERROR
let guitars = ["strat", "les paul", 5150];
guitars[0] = "hello";
guitars.push(56);
let mixedData = ["evh", 1084, true];
// defining type of data in arr
let bands = [];
// Tuple
// bellow tuple requires 3 types
let myTuple = ["John", 23, true];
let mixed = ["John", 1, false];
// Object
let myObj;
myObj = [];
const exampleObj = {
    prop1: "Hello",
    prop2: true, // prop2 requires only bool
};
let evh = {
    name: "Eddie",
    active: false,
    albums: [1084, 5150, "OU812"],
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}`;
};
console.log(greetGuitarist(evh));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
