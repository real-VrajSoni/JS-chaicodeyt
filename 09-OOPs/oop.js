const user = {
  username: "vraj",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log(`Username: ${this.username}`);
  },
};
// console.log(user.username);
// console.log(user.getUserDetails());

//******************************************************************* */

// const promiseOne = new Promise()

function User(username, loginCount, isLoggedIn) {
  // myUserName = username
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("vraj", 8, true);
const userTwo = new User("chaicode", 11, false);
console.log(userOne.constructor);
// console.log(userTwo);
