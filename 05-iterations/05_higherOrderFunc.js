const coding = ["JS" ,"ruby", "java", "python", "swift"]

//for each requires a call back function
// call back means it does not require name (  function greet (){} )  => not needed 'greet'
// callback => function (){}



// coding.forEach( function (val){
//     console.log(val);    
// })


// coding.forEach( (value)=>{
//     console.log(value);
    
// })



// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)



// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
    
// })



const myCoding = [
    {
        languageName: "javascript",
        languageFileName : "JS"
    },
    {
        languageName: "python",
        languageFileName : "py"

    },
    {
        languageName: "C++",
        languageFileName : "cpp"

    }
]

myCoding.forEach( (item)=>{
    console.log(item.languageName);
    console.log(item.languageFileName);

    
})