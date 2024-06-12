//only 2 types of dT : primitive and non-primitive.
//categorized on how a data is stored inside a memory and accessed. 
 
//Primitive: String, Number, Boolean, null, undefined, Symbol, BigInt.

//Non-Primitive(Reference) : Arrays, Objects, Functions

const score = 100
const scoreValue = .3
const isLoggedIn = false
const temp = null
let userEmail // undefined by default. 

//Symbol 
const id  = Symbol('123')
const id1 = Symbol('123')

//BigInt
const bigInt = 81723987198749178491n
console.log(typeof bigInt);

console.log(id == id1);
console.log(id);
console.log(id1);

//JS is dynamically typed.

//Reference DT
//Arrays:

const heros = ["shaktimaan", "naagraj", "doga"]

let myObj = {
    name: "Varenya",
    age: 19
}

const myFunct = function() {
    console.log("Hello, World");
}
myFunct()
console.log(typeof myFunct);
console.log(typeof temp); //return object

//Stacks (Primitive) and Heaps (Non-Primitive)
//Stack me copy milta h, Heap me reference milta h.

let string1 = "string1"
let string2 = string1 // Copy dia jata hai 
string2 = "string"
console.log(string1);
console.log(string2);

let user1 = {
    email: "google.com",
    UPI: "google@yba"
}

let user2 = user1 // gets same reference since its stored in heap memory 
user2.email = "bing@g.com"

// console.log(user1.email)
// console.log(user2.email) // gives same result. 