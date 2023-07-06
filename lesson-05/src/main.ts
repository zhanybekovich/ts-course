type One = string;
type Two = string | number;
type Three = "hello";

// type assertion
// convert to more or specific
let a: One = "hello";
let b = a as Two;
let c = a as Three;

let d = <One>"World";
let e = <string | number>"Hello";

// narrowing
const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

// be careful TS sees no problems - but str is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number;

// unknown type -- NOT RECOMMENDED
10 as unknown as string;

// useful assertion
const img = document.querySelector("img") as HTMLImageElement;

const myImg = document.getElementById("img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("img");

img.src;
myImg.src;
