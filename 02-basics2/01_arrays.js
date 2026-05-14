// arrays

const myArr = [0, 1, 2, 3, 4, 5]
//console.log(myArr[0]);

myArr.push(6)   // adds 6 at last place
myArr.pop()     //removes last element

myArr.unshift(9)    // adds the value at 1st place
myArr.shift()      // removes the first element

myArr.includes(5)
myArr.indexOf(3)


//  slice and splice 
const newArr = ["a", "b", "c"]
const slicedArr = newArr.slice(1,3)

// console.log(newArr);
// console.log(slicedArr);

const splicedArr = newArr.splice(0,2, "d", "e")
// console.log(slicedArr);
// console.log(newArr);
