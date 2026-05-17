// immediately invoked function Expressions (IIFE) 
//   ()()
// use ; to end IIFE otherwise it will give typeerror


// named iife
(function chai(){
    console.log(`DB CONNECTED`);
})();


// unnamed iife
(() => {
    console.log(`DB CONNECTED TWO`);
})();



((name) => {
    console.log(`DB CONNECTED THREE , ${name}`);
})('vraj');