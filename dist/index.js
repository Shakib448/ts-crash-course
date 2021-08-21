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
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const shakib = new Person(1, "Shakib");
const mike = new Person(2, "Mike");
// Sub classes
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Mike", "Developer");
// console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["Mike", "Shakib", "Mili"]);
strArray.push("hello");
function factorial(n) {
    if (n > 1) {
        return n * factorial(n - 1);
    }
    return 1;
}
console.log(factorial(4));
