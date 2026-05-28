const user = {
  username: "vraj",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log(`Username: ${this.username}`);
  },
};
console.log(user.username);
console.log(user.getUserDetails());
