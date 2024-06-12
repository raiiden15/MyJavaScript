//Objects and Events are very Important for mastering JS
//There are 2 ways of creating objects - literal(singleton nahi banta h) and constructor(singleton banta h)

// Object.create -> this is constructor method, ignore for now.

//Object Literal
//Objects me keys aur values define kr sakte h

const mySym = Symbol("key1")

const JSUser = {
    name: "Varenya", //processes name as "name"
    age: 18,
    location: "India",
    email: "email.com",
    lstlogin: ["monday", "saturday"],
    "full Name": "Varenya Pawnikar",
    //  mySym: "mykey1" //This does not work, it's dT remains string instead of being a Symbol, therefore its an incorrect way.
    [mySym]: "mykey1" // to use it as a symbol
}

// console.log(JSUser.name);
// console.log(JSUser.full Name);//This is inaccessible.
// console.log(JSUser["name"]);
// console.log(JSUser["full Name"]);
// console.log(JSUser["mySym"]); // o/p is undefined
// console.log(JSUser[mySym]); //"mySym" won't work

JSUser.name = "Parth"
// Object.freeze(JSUser) //freezes the object
JSUser.name = "Vanna"
// console.log(JSUser);

console.log(typeof JSUser[mySym]);
// Functions are treated as vars in JS
JSUser.greeting = function() {
    console.log("Hello, User!");
}

JSUser.greeting2 = function() {
    console.log(`Hello, User!, ${this.name}`); //this referes to 'this' object only, here JSUser
}

console.log(JSUser.greeting2()); 
console.log(JSUser.greeting()); 
//JSUser.greeting prints [Function (anonymous)]. ie used as object. sirf reference aya h. function execute nahi hua h. 