// const userEmail = [] //truthy
const userEmail = "" // falsey
 
if (userEmail) { //truthy value, assumed that string has true valye
    // console.log("Got User Email");
} else {
    // console.log("No user email");
}

//Falsy values
// false, 0, -0 BigInt 0n, "", null, undefined, NaN

//Truthy Values
// "0", 'false', " ", [], {}, function(){} empty function

// const arr = []
// if (arr.length === 0) {
//     console.log("Array is Empty");
// }

//Checking for object
const myObj = {}
if (Object.keys(myObj).length === 0) {
    // console.log("Object is empty");
}

//Nullish Coalescing Operator (??) : null aur undefined pr pura kaam hota hai

let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 15 // 15
val1 = null ?? 10 ?? 15 // first value assign hojati hai
// Basically Null aur undefined ko handle krne k lie, safety check krta hai.

console.log(val1);

//Ternary Operator 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less Than 80") : console.log("More than 80");