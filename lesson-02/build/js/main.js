"use strict";
// Declare variable with type and assign value
// let myName: string = "John";
// Declare variable with type and then assign
// string type
let myName;
myName = "John";
// number type
let myNumber;
myNumber = 30;
// boolean type
let isMarried;
isMarried = false;
// any type
let friends;
friends = "Pete";
console.log(friends);
friends = 20;
console.log(friends);
friends = false;
console.log(friends);
// types for func params
const sum = (a, b) => {
    return a + b;
};
console.log(sum(2, 2));
// union type
let album;
album = "Hello";
console.log(album);
album = 20;
console.log(album);
let postId;
postId = "qefki49";
postId = 920;
console.log(postId);
// regex type
let re = /\w+/g;
