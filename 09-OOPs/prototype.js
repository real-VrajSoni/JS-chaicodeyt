// let myName = "vraj       ";

// // console.log(myName.length);
// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    },
};

Object.prototype.vraj = function () {
    console.log(`vraj is present in all objects `);
};

Array.prototype.heyVraj = function () {
    console.log(`Vraj says hello`);
};

// heroPower.vraj();
// myHeros.vraj();
// myHeros.heyVraj();
// heroPower.heyVraj();

const User = {
    name: "chai",
    email: "chai@google.com",
};

const teacher = {
    makeVideo: true,
};
const teachingSupport = {
    isAvailable: false,
};
const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: teachingSupport,
};

teacher.__proto__ = User;

// modern syntax

Object.setPrototypeOf(teachingSupport, teacher);

let anotherUserName = "ChaiAurCode       ";

String.prototype.truelength = function () {
    console.log(`${this}`);

    console.log(`true length is : ${this.trim().length}`);
};
anotherUserName.truelength();
"vrajsoni loves coding ".truelength();
