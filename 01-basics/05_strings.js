const name = "vraj"
const repoCount = 50

//console.log(name + repoCount + " Value");


//string interpolation
//console.log(`hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`)



const gameName = new String("vrajsoni")

//console.log(gameName[0]);
//console.log(gameName.__proto__);

console.log(gameName.charAt(3));
console.log(gameName.indexOf('s'));

const newName = "  v r a j         "
console.log(newName);
console.log(newName.trim());

const myName = "vrajutoni"
console.log(myName);

console.log(myName.replace('ut', 's'));

// const myString = "hello my name is Vraj Soni .";
// const splits = myString.split(/(\d)/);

// console.log(splits);
// // [ "Hello ", "1", " word. Sentence number ", "2", "." ]

const myString = "hello 1 my name is 2  @ $ # vraj soni";
const splits = myString.split(/(\d)/);

console.log(splits);
// [ "Hello ", "1", " word. Sentence number ", "2", "." ]