const accountId = 1345;
let accountEmail = 'vraj@google.com';
var accountPassword = "vrajisgoodboy";
accountCity = 'Vadodara';
let accountState;

//const variable cannot be changed
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
prefer not to use 'var' variable bcoz of issue in block scope and functional scope
*/