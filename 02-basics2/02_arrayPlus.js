const marvelHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]


// marvelHeros.push(dcHeros)
// console.log(marvelHeros);



//concat se dono arrays merge ho jaygi 
const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);


//######### spread operator >>> concat #############

const newHero = [...marvelHeros, ...dcHeros]
// console.log(newHero)


const fudduArr = [1, 2, 3, [4, 5,6], 7, [8, 9, [10, 11]]]
const realArr = fudduArr.flat(Infinity)
// console.log(realArr);


//  from is used to convert strings,objects, etc to array
// console.log(Array.from("vraj"));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));

