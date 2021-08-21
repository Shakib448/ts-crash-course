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

// Functions

function addNum(x: number, y: number): number {
  return x + y;
}

// Void
function log(message: string | number): void {
  console.log(message);
}

// Interfaces
// Objects
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number; // Optional ? if this included or not
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number) => x + y;
const sub: MathFunc = (x: number, y: number) => x - y;

// Classes

interface PersonInterface {
  id: number;
  name: string;
  age?: number; // Optional ? if this included or not
  register(): string;
}

class Person implements PersonInterface {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    return `${this.name} is now registered`;
  }
}

const shakib = new Person(1, "Shakib");
const mike = new Person(2, "Mike");
console.log(shakib.register());
