type VerifyUserFn = (user: User, receivedValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, receivedValue) => {
  return (
    user.username === receivedValue.username &&
    user.password === receivedValue.password
  );
};

const bdUser = { username: 'john', password: '123456' };
const sentUser = { username: 'john', password: '1234567' };

//Note that TypeScript doesn't care about type identity, only matching structure (in other words, is it assignable to User?)
//This function will work as per described above
const logIn = verifyUser(bdUser, sentUser);

console.log(logIn);

export {};
