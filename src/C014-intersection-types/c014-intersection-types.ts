//Less used than union types

type hasName = { name: string };
type hasLastName = { lastName: string };
type hasAge = { age: number };

//Intersection type (& operator)
type Person = hasName & hasLastName & hasAge;

const person1: Person = {
  name: 'YourName',
  lastName: 'YourLastName',
  age: 25,
};

console.log(person1);

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type Intersection = AB & AC & AD;

//'A' is the only valid value for this type
const intersect: Intersection = 'A';

console.log(intersect);

export {};
