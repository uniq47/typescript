"use strict";
let exampleAny;
exampleAny = 10;
console.log(typeof exampleAny);
exampleAny = 'Hello';
exampleAny = [1, 2, 3];
console.log(exampleAny);
let exampleUnknown;
exampleUnknown = 10;
console.log(typeof exampleUnknown);
exampleUnknown = 'Hello';
exampleUnknown = [1, 2, 3];
let numbers;
numbers = 40;
numbers = 50.1;
numbers = 15.44;
// console.log(numbers.toFixed(1));
// numbers.i.wish.to.usethis();
// any->unknown
if (typeof numbers === "number") {
    console.log("numbers is a number");
    console.log(numbers.toFixed(1));
}
if (typeof numbers === "string") {
    console.log("numbers is a string");
    console.log(numbers.toUpperCase());
}
typeof numbers === "number" && console.log(numbers.toFixed(1));
