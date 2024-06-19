//Function will not reach its end point or throws an exception, infinite loops

function createError(): never {
  throw new Error('Some error');
}

createError();

export {};
