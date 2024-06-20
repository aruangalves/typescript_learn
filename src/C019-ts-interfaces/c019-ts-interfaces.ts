interface NameType {
  name: string;
}
//roughly equivalent to
/*type NameType = {
  name: string;
};*/
//Note that the syntax has minimal changes

interface LastNameType {
  lastName: string;
}

interface FullNameType {
  fullName(): string;
}

//type Number = number | string;

//type PersonType = NameType & LastNameType & FullNameType;
interface PersonInterface extends NameType, LastNameType, FullNameType {}

export class Person implements PersonInterface {
  constructor(
    public name: string,
    public lastName: string,
  ) {}

  fullName(): string {
    return this.name + ' ' + this.lastName;
  }
}

const person = new Person('Bob', 'the Assistant');
console.log(person.fullName());

const personObj: PersonInterface = {
  fullName() {
    return this.name + ' ' + this.lastName;
  },
  name: 'John',
  lastName: 'Doe',
};

console.log(personObj);

export {};
