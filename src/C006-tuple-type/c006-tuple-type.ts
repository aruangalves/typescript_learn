const clientData: [number, string] = [1, 'Name'];
//define optional data as
const anotherClientData: [number, string, string?] = [5, 'Name'];

//multiple data
const thirdClientData: [number, string, ...string[]] = [
  7,
  'Name',
  'MiddleName',
  'LastName',
];
thirdClientData.pop();

//immutable tuple
const immutableClientData: readonly [number, string] = [9, 'Immutable'];
//this should display an error:
//immutableClientData[0] = 10;
//immutableClientData.pop();

clientData[0] = 20;
anotherClientData[2] = 'LastName';

//immutable array
const immutableArray: readonly string[] = ['Name', 'MiddleName', 'LastName'];
const anotherImmutableArray: ReadonlyArray<string> = [
  'AnotherName',
  'AnotherMiddleName',
  'AnotherLastName',
];

//this should display an error:
//immutableArray[0] = 'NewName';
//immutableArray.push('LastLastName');
//anotherImmutableArray.pop();

console.log(clientData);
console.log(anotherClientData);
console.log(thirdClientData);
console.log(immutableClientData);
console.log(immutableArray);
console.log(anotherImmutableArray);

export {};
