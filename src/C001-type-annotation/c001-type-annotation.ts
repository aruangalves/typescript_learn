/* eslint-disable */
//ESLint disabled since types are being explicitly annotated as an example
//Basic types (where type inference occurs)
let name: string = 'Your Name'; // Any string, '', "", ``
let age: number = 21; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adult: boolean = true; //true or false
let symbol_var: symbol = Symbol('some-symbol'); //symbol
//let big: bigint = 10n; //bigint -- Requires ES2020

//Arrays
let numberArray: Array<number> = [1, 2, 3];
let otherNumberArray: number[] = [1, 2, 3];
let stringArray: Array<string> = ['a', 'b'];
let otherStringArray: string[] = ['a', 'b'];

//Objects
let person: {name: string, age: number, adult?: boolean} = {
  name: 'Some person',
  age: 25
};

//Functions

function sum(x: number, y: number){
  return x + y;
}

const anotherSum: (x: number, y: number) => number = (x, y) => x + y;

export {};

