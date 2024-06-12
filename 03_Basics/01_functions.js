//Functions - code ko package me band krna

function sayMyName() {
    console.log("V");
    console.log("a");
    console.log("r");
    console.log("e");
    console.log("n");
    console.log("y");
    console.log("a");
}

sayMyName() //this executes the function, ye uska reference hogaya
// sayMyName // -This is only reference

// function addNums(num1, num2) { //Defination wale parameters hote h
//     console.log(num1 + num2);
// }

function addNums(num1, num2) { //Defination wale parameters hote h
    return num1 + num2    //return k baad function koi kaam nahi krta! 
}

addNums(7, 9) // Isko arguments bolte hai.

const result = addNums(7, 9)
// console.log("Result: ", result);  //this returns undefined since we are logging in function only, when we do other function, then we get correct answer since its returning a value by adding arguments passed to it.

function loginUserMessage(username) { //username = "sam" - this is default value if nothing is passed.
    // if (username === undefined) this is same
    if (!username) { //that is username jo undefined hai, uska ulta krdo, since undefined is by default considered as false.
        console.log("Please enter a userName");
        return
    }
    return `${username} just logged in!\n`
}

// console.log(loginUserMessage("Varenya"))
// console.log(loginUserMessage()) //prints undefined since its not given any argument. 

function calculateCartPrice(val1, val2, ...num1) { // ... is rest operator, also called as spread operator used as earlier
    return num1
}

console.log(calculateCartPrice(200, 400, 600, 2000)); //this now returns array. 
// i.e is pahile do variable k baad, jitne bhi nums h, unko ek array me return krta h, here 600 - 2000
const user = {
    username: "Varenya",
    price: 1999
}

function handleObj(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price} !`);
}

handleObj(user)
handleObj({
    username: "Parth",
    price: 81238
})

const myarr = [100, 200, 400, 599]

function returnSecondVal(getArray) {
    return getArray[1];
}

console.log(returnSecondVal(myarr))
console.log(returnSecondVal([1298, 61736, 196239]))