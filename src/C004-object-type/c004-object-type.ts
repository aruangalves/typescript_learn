//Avoid object or {} to explicitly define an object, prefer Record<string, unknown> or let TypeScript implicitly define as an object type

const objectA: {
  keyA: string;
  keyB: string;
  //keyC?: string;
  //keyC is now set as optional
  [key: string]: unknown;
} = {
  keyA: 'value A',
  keyB: 'value B',
};

objectA.keyA = 'another A';
//You can't set a new key on TypeScript when the object type is implicit
//You can enable it as an optional key while defining types or through [key: string]: unknown; in order to accept new keys afterwards
objectA.keyC = 'new key';

//Protect a property against modification
const objectB: {
  readonly keyA: string;
} = {
  keyA: 'value A',
};

console.log(objectB.keyA);

//This should display an error:
//objectB.keyA = 'another value';

export {};
