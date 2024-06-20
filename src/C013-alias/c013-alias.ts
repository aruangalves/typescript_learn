type Age = number;
type RGBColor = 'red' | 'green' | 'blue' | 'white';
type CMYKColor = 'cyan' | 'magenta' | 'yellow' | 'black';
type FavoriteColor = RGBColor | CMYKColor;
type Person = {
  name: string;
  age: Age;
  wage: number;
  favoriteColor?: FavoriteColor;
};

const person1: Person = {
  name: 'Name',
  age: 21,
  wage: 400_000, //400000
  favoriteColor: 'red',
};

export function setFavoriteColor(person: Person, color: FavoriteColor): Person {
  return { ...person, favoriteColor: color };
}

console.log(setFavoriteColor(person1, 'blue'));

console.log(person1); //function doesn't change the original object, favoriteColor is still set as 'red', effect of spread operator

export {};
