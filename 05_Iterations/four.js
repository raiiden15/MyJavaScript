const myObj = {
    js: 'javaScript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'Swift By apple'
}

// FOR IN loop 
// for (const key in myObj) {
//     // console.log(key); //THis does not print values, only keys
//     console.log(`${key} shortcut is for ${myObj[key]}`); //This prints Values
// }

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key); //Keys print krta first, i.e 0, 1, 2, 3, 
    console.log(programming[key]);
}