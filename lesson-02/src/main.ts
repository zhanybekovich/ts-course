// Declare variable with type and assign value
// let myName: string = "John";

// Declare variable with type and then assign
// string type
let myName: string;
myName = "John";

// number type
let myNumber: number;
myNumber = 30;

// boolean type
let isMarried: boolean;
isMarried = false;

// any type
let friends: any;
friends = "Pete";
console.log(friends);

friends = 20;
console.log(friends);

friends = false;
console.log(friends);

// types for func params
const sum = (a: number, b: number) => {
  return a + b;
};
console.log(sum(2, 2));

// union type
let album: string | number;
album = "Hello";
console.log(album);

album = 20;
console.log(album);

let postId: string | number;
postId = "qefki49";
postId = 920;
console.log(postId);

// regex type
let re: RegExp = /\w+/g;
