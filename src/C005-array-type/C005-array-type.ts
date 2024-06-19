//Array<T> or T[]
function multiplyArgs(...args: Array<number>): number {
  return args.reduce(
    (accumulator, currentValue) => (accumulator *= currentValue),
    1,
  );
}

function concatString(...args: string[]): string {
  return args.reduce((acc, v) => (acc += v), '');
}

function toUpperString(...args: string[]): string[] {
  return args.map((v) => v.toUpperCase());
}

console.log(multiplyArgs(1, 2, 3, 4, 5));

console.log(concatString('h', 'e', 'l', 'l', 'o'));

console.log(toUpperString('h', 'e', 'l', 'l', 'o'));

export {};
