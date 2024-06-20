const body = document.querySelector('body');

//Traditional way to check if body exists
//Note: this is not assertion
if (body) body.style.background = 'red';

//Non-null assertion. This is not recommended
const anotherBody = document.querySelector('body')!;
anotherBody.style.background = 'green';

//Type assertion, recommended when you're sure that the element exists on DOM. If not sure, use the traditional form.
const thirdBody = document.querySelector('body') as HTMLBodyElement;
thirdBody.style.background = 'blue';

//HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Some value';
input.focus();

//When you need to handle a type as another, the only possible way is through selecting a sub-type. If for any reason you need to raise a level, then define it as unknown first and convert to the required type afterwards.
//This is a very rare case and is not recommended. Try to avoid
//const body4 = document.querySelector('body') as unknown as number;

export {};
