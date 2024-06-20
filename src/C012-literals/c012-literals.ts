let x = 10;

x = 0b1010;

const y = 10;
//literal
//let a: 100 = 100;
const a = 100 as const;

const person = {
  name: 'Name' as const,
  lastName: 'LastName',
};

//This should display an error
//person.name = 'AnotherName';

function chooseColor(color: 'red' | 'green' | 'blue') {
  return color;
}

//This should display an error
//chooseColor('cyan');

console.log(x, y, a);
console.log(person);
console.log(chooseColor('red'));

export {};
