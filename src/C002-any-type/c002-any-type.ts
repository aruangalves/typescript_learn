//Strict is enabled so ESLint should display an error message saying you should choose a different type than an implicit any
/*function showMessage(msg: any) {
  return msg;
}*/

function showMessage(msg: string) {
  return msg;
}

console.log(showMessage('Olá'));

export {};
