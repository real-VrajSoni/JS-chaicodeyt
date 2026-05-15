function sayMyName() {
console.log("v");
console.log("r");
console.log("a");
console.log("j");
}

// sayMyName()

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
    
// }

// function addTwoNumbers(num1, num2) {
//     let result = num1 + num2
//     return result
// }


function addTwoNumbers(num1, num2) {
    return num1 + num2    
}

const result = addTwoNumbers(5,4)
// console.log(result);


function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("vraj"))