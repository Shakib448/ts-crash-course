"use strict";
// Basic types
let id = 5;
let company = "Shakib";
let isPublished = true;
let x = "Hello world";
let ids = [1, 2, 2, 3, 4, 5];
let arr = [1, 2, 3, true, "shakib"];
// Tuple
let person = [1, "shakib", false];
// Tuple array
let employee;
employee = [
    [1, "shakib"],
    [2, "Muktadir"],
    [3, "shakib"],
];
// Union
let pid = 22;
pid = "22";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: "John",
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
// class Person {
//   id: number;
//   name: string;
//   constructor(){
//   }
// }
