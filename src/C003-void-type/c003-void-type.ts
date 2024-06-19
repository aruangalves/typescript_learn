//It's good practice to explicitly define your return type even if TypeScript can infer its implicit return

function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

noReturn('Your', 'string', 'here');

const person = {
  name: 'FirstName',
  lastName: 'LastName',

  showName(): void {
    console.log(this.name + ' ' + this.lastName);
  },
};

person.showName();

export { noReturn };
