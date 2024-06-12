const name = "Varenya"
const repoCount = 50
// console.log(name + " " + repoCount + " Value"); Outdated
// instead we use backticks, which is a better way, called as string interposition.
// console.log(`Hello My name is ${name} and my repo count is ${repoCount}!`);

//way ato declare it as object.
const gameName = new String('varenya-p-rcoem') //string is not array, its a key value pair, therefore many methods can be called on the gameName var declared as object. 

// console.log(gameName[0]);
// console.log(gameName.__proto__); // gives {} i.e its an object 

console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2)); // char at pos 2

// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) //last value include nahi horri h
console.log(newString);

// const anotherString = gameName.slice(0, 15) // last value include hoti h
// const anotherString = gameName.slice(-5) // give rcoem as o/p
// const anotherString = gameName.slice(-9, -5) // give a-p- as o/p
const anotherString = gameName.slice(-15, 4) // give vare as o/p
console.log(anotherString);

const newString1 = "        varenya   "
// console.log(newString1);
// console.log(newString1.trim());

const url = "https://varenya.com//varenya&2pwnikr"
// console.log(url.replace('&2', '_'))

// console.log(url.includes("varenya"))

// console.log(gameName.split('-')); //splits on basis of dash. 
// console.log(gameName.bold()); // adds the bold tag to our string