let stringArr = ["one", "two", "three"];
stringArr[0] = "john";
// stringArr[0] = 5; --ERROR
// stringArr.push(45); --ERROR

let guitars = ["strat", "les paul", 5150];
guitars[0] = "hello";
guitars.push(56);

let mixedData = ["evh", 1084, true];

// defining type of data in arr
let bands: string[] = [];

// Tuple
// bellow tuple requires 3 types
let myTuple: [string, number, boolean] = ["John", 23, true];

let mixed = ["John", 1, false];

// Object
let myObj: object;
myObj = [];

const exampleObj = {
  prop1: "Hello", // prop1 requires only str
  prop2: true, // prop2 requires only bool
};

// Annotate type of the obj
interface Guitarist {
  name: string;
  active: boolean;
  // active?: boolean; -- setting optional type
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1084, 5150, "OU812"],
};

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name}`;
};

console.log(greetGuitarist(evh));

// Enums
enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.A);
