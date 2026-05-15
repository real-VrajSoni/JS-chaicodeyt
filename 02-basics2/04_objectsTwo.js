// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "abc123"
tinderUser.name = "papakipari"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// nested objects bhi likh sakte hai unko . se access kro

const obj1 = { 1: "a" , 2: "b"}
const obj2 = { 3: "a" , 4: "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);



const users = [
    {
        id : 1,
        email : "vraj@google.com"
    },
    {
        id : 1,
        email : "vraj@g.com"
    },
    {
        id : 1,
        email : "vraj@google.com"
    },
    {
        id : 1,
        email : "vraj@google.com"
    }
]

// console.log(users[1].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
