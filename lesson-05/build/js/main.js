"use strict";
// type assertion
// convert to more or specific
let a = "hello";
let b = a;
let c = a;
let d = "World";
let e = "Hello";
// narrowing
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
// be careful TS sees no problems - but str is returned
let nextVal = addOrConcat(2, 2, "concat");
// unknown type -- NOT RECOMMENDED
10;
// useful assertion
const img = document.querySelector("img");
const myImg = document.getElementById("img");
const nextImg = document.getElementById("img");
img.src;
myImg.src;
