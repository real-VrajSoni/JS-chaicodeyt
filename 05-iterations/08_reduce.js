const myNums = [ 1, 2, 3, 4, 5]

// const total = myNums.reduce( function(acc , curval) {
//     console.log(`acc : ${acc} and curval : ${curval}`);
    
//     return acc + curval
// }, 0)


const total = myNums.reduce( (acc, curval) => acc + curval , 0)
console.log(total);


const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "DSA course",
        price : 1999
    },
    {
        itemName : "web dev course",
        price : 3999
    },
    {
        itemName : "app dev course",
        price : 7999
    },
    {
        itemName : "data science course",
        price : 9999
    }
]

const totalbill = shoppingCart.reduce( (acc,item) => acc + item.price ,0 )
console.log(totalbill);
