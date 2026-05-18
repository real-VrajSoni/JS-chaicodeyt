// const userEmail = "v@gmai.com"
// const userEmail = ""
const userEmail = []

if (userEmail) {
    console.log("Got User Email");
    
}else{
    console.log("Don't have user email");
    
}



// falsy values 

//  false, 0, -0, BigInt 0n , "" , null , undefined , NaN



// truthy values

// true, "0" , 'false', " " , [] , {} , function(){} , 




//  Nullish coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 10
// console.log(val1);



// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80")
