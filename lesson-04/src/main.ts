// Type aliases

type stringOrNumber = string | number;
type stringOrNumberArr = (string | number)[];

type Guitarist = {
  name: string;
  active: boolean;
  // active?: boolean; -- setting optional type
  albums: stringOrNumberArr;
};

// literal types
let myName: "John";

let userName: "Dave" | "John" | "Brad";

userName = "Brad";
// userName = "Pete"; -- ERROR

// functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (c, d) {
  return c * d;
};

console.log(multiply(2, 5));

let divide: mathFunction = function (a, b) {
  return a / b;
};
console.log(divide(100, 4));

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") return a + b + c;

  return a + b;
};

console.log(addAll(3, 5, 7));

const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

console.log(sumAll(2, 2)); // returns 6: a-1, b-2, c-default-2

// rest params
const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};

console.log(total(1, 2, 3, 4));

// never type
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};
