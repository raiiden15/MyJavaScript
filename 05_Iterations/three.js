// FOR OF Loop, array specific
// [{}, {}, {}] - array of objects

// const arr = [1, 2, 3, 4, 5]
// syntax - const iterator of object - here object is konse cheez pr run krna chahiye, not specifically object
// for (const num of arr) {
//     console.log(num);
// }

// Strings pr bhi chalta h bhai
// const str = "Hello, World"
// for (const greet of str) {
//     console.log(greet);
// }

// MAPS - holds key value pair, and stores the order of keys, no duplicates
const maps = new Map()
maps.set('IN', "India")
// map.set('IN', "India")
maps.set('USA', "United State of America")
maps.set('FR', "France")
// console.log(maps);

//Prints whole key and value
for (const map of maps) {
    console.log(map);
}
//For destructuring of map
for (const [key, value] of maps) {
    // console.log(key, ":-", value);
}

// Object is not Iterable via 'for of' loop
// const myObj = {
//     game1: 'NFS',
//     game2: 'GTA'
// }
// for (const [key, value] of myObj) {
//      console.log(key, ":-", value);
// }