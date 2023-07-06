"use strict";
// Type aliases
// literal types
let myName;
let userName;
userName = "Brad";
// userName = "Pete"; -- ERROR
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
let multiply = function (c, d) {
    return c * d;
};
console.log(multiply(2, 5));
let divide = function (a, b) {
    return a / b;
};
console.log(divide(100, 4));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined")
        return a + b + c;
    return a + b;
};
console.log(addAll(3, 5, 7));
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
console.log(sumAll(2, 2)); // returns 6: a-1, b-2, c-default-2
// rest params
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
console.log(total(1, 2, 3, 4));
// never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
