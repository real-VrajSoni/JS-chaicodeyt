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

// console.log(loginUserMessage("vraj"))



function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500));


const user = {
    username : "vraj",
    prices : 199,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user)
handleObject({
    username : "sam altman",
    price : 399
})


const myNewArr = [200, 400, 300, 500]

function returnArray(getArray){
    return getArray[1]
}

console.log(returnArray([100,200,300.400]));
