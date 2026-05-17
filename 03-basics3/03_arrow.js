const user = {
    username : "vraj",
    price : 199,

    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sam Altman"
// user.welcomeMessage()

// console.log(this);



// function chai(){
//     let username = "vraj"
//     console.log(this.username);
    
// }
// chai()


// const chai = function(){
//     let username = "vraj"
//     console.log(this.username);
    
// }
// chai()



const chai = () => {
    let username = "vraj"
    console.log(this.username);
    
}
// chai()

// ****** arrow function.   curly braces warp then return is used

const addTwo = (num1, num2) => {
    return num1 + num2
}

// console.log(addTwo(3,9))

//****************  implicit arrow function ........ without curly braces and 
// no need to return bcoz just single line of code

const addThree = (num1, num2, num3) => num1 + num2 + num3
console.log(addThree(3,6,9));

