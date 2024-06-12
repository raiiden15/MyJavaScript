// var c = 300 // This is global scope
let a = 100
{} //ye scope hai, i.e  called as block scope
if (true) {
    let a = 10
    const b = 20
    // c = 30
    // console.log("Inner: ", a); // i.e if me a ki value 10 h.
}

// console.log(a); //prints 100
// console.log(b);
// console.log(c); //This prints 30, since var has scope issues\

//Code ka global scope aur browser ka inspect wala scope alag h.

function one() {
    const username = "varenya"

    function two() {
        const website = "youtube"
        // console.log(username); 
    }
    // console.log(website); since iska scope pahile hi khatam hogaya h
    two()
}
//Bade choto se icecream nahi mang sakte, its not good behavior
one()

// ########## Intresting
addone(5) //this would work
function addone (num) {
    return num + 1
}
// console.log();
// x = addtwo(5) // This is hoisting concept, it won't work
const addtwo = function(num) { //This is called as expression, since a var is holding a function.
    return num + 2
}
// x = addtwo(5) // this works, since its declared after the addtow function.
console.log(x);