// singleton => constructor se banega but hamare koi kam ka nahi 
//  Object.create()


// object literals
const mySym = Symbol("key1")

const JsUser = {
    name : "vraj",
    age : 22,
    [mySym] : "mykey1",
    location : "vadodara",
    email : "vraj@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Wednesday"]    
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);
// console.log(typeof mySym);


JsUser.email = "vraj@openai.com"
// Object.freeze(JsUser)
JsUser.email = "vraj@tesla.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello JS expert");
}

JsUser.greetingTwo = function(){
    console.log(`hello JS expert, ${this.name}`);
}

JsUser.greeting()
JsUser.greetingTwo()
