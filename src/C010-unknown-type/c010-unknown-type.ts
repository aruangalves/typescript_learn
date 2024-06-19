//Father of all types, requires type checking before usage, more secure than 'any'

let x: unknown;
x = 100;
x = 'Name';
x = 900;
x = '10';
const y = 800;

//Displays an error since type is not checked
//console.log(x + y);

//It should work now
if (typeof x === 'string') {
  console.log(x + y);
}

export {};
