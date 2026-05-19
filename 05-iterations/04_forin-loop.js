const myObject = {
    js : 'JavaScript',
    cpp : 'c++',
    rb : 'Ruby',
    swift : 'Swift by apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}


const programming = ["js", "rb", "swift"]
for (const key in programming) {
    console.log(key);
    console.log(programming[key]);
    
}