// Please don't change the pre-written code
// Import the necessary modules here

const users = [];
let id = 0;
class UserSchema {
  constructor(name, email, password) {
    this.id = ++id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
export const addUser = (data) => {
  // Write your code here
  const newUser = new UserSchema(
    data.name,
    data.email,
    data.password,
  );
  data.id = users.length + 1;
  users.push(newUser);
  return newUser;
};
addUser({ name: "vivek", email: "krvivi28@gmail.com", password: "vivek28@" });

export const confirmLogin = (data) => {
  // Write your code here
  const user = users.find(
    (u) =>
      u.email == data.email && u.password == data.password
  );
  return user;
};

export const getAllUsers = () => {
  return users;
};
