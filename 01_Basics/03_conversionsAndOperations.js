// jb hame pata h nahi h backend se konsi value arri h
// let score = undefined // gives NaN - which is abreivation for not a number
let score = "23asd" // Not a number but gets converted, but gives NaN
// let score = null // o/p is 0 here, i.e convert nhi hopaya pr zero return krdia
// console.log(typeof score)
// console.log(typeof(score))
let valInNum = Number(score) //guarentees that our score is in Number type.
// console.log(typeof valInNum)
// console.log(valInNum) // for NaN, which is also a datatype by investigation.

// let isLoggedIn = " "
// let boolIsLoggedIn = Boolean(isLoggedIn)
// console.log(boolIsLoggedIn); // returns true, when isLoggenIn = "", returns false

// let someNum = 33
// let stringNum = String(someNum)
// console.log(typeof stringNum)

// ********OPERATIONS*******
// let val = 3
// let nval = - val
// console.log(nval);

// let str1 = "hello"
// let str2 = " varenya"
// console.log(str1 + str2); // str3 = str1 + str2 and then print str3

// console.log("1" + 2); // gives 12 as o/p
// console.log(1 + "2"); // also gives 12 as o/p
// console.log("2" + 3 + 3); // gives 233 as o/p
// console.log(2 + 2 + "3"); // gives 43 as o/p, since it follows ecma guidelines

// console.log(+true); //gives o/p 1, true+ does not give output. very bad code to use
console.log(+""); // useless, but gives o/p as 0, since "" is consiered false, and we are using + to log it in number format

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++
// console.log(gameCounter); //prefix and postfix values k baareme padhna mdn pr padhna