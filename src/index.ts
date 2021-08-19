// Basic types

let id: number = 5;
let company: string = "Shakib";
let isPublished: boolean = true;
let x: any = "Hello world";

let ids: number[] = [1, 2, 2, 3, 4, 5];

let arr: any[] = [1, 2, 3, true, "shakib"];

// Tuple

let person: [number, string, boolean] = [1, "shakib", false];

// Tuple array

let employee: [number, string][];

employee = [
  [1, "shakib"],
  [2, "Muktadir"],
  [3, "shakib"],
];

// Union

let pid: string | number = 22;
pid = "22";

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

// Type Assertion

let cid: any = 1;

// let customerId = <number>cid;
let customerId = cid as number;
