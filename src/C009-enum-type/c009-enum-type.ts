enum Colors {
  RED, //0
  BLUE, //1
  GREEN, //2
}

//enum merge
enum Colors {
  CYAN = 4,
  MAGENTA,
  YELLOW,
}

function chooseColor(color: Colors): void {
  console.log(Colors[color]);
}

chooseColor(Colors.MAGENTA);

//Start at index 10
enum Foods {
  PASTA = 10,
  PIZZA,
  CALZONE,
}

//Arbitrary indexes
enum Media {
  Diskette = 312,
  CD = 514,
  DVD = 47,
}

//You can also use string as indexes, but will need to set the follow index because TypeScript can't automatically assert values until they become numeric again
enum Planes {
  Boeing = 737,
  Airbus = 'A320',
  Embraer = 'E2',
}

console.log(Colors);
//Output:
//{ '0': 'RED', '1': 'BLUE', '2': 'YELLOW', RED: 0, BLUE: 1, YELLOW: 2 }

console.log(Colors.RED);
//Output: 0

console.log(Colors[4]);

console.log(Foods);

console.log(Foods[0]);
//undefined

console.log(Foods[11]);
//PIZZA

console.log(Media);
console.log(Media[47]);

console.log(Planes);
console.log(Planes['Airbus']);

export {};
