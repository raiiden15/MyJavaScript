const user = {
    username: "Varenya",
    price: 1999,

    welcomeMsg: function() {
        console.log(`${this.username}, welcome to website!`);
        //we cannot do directly ${username}, since we need to refer to the current context 
        //we user 'this' keyword in current context reference.
        console.log(this);
        //apna current context batata hai!, pura object print karta 
    }
}

// user.welcomeMsg()
// user.username = "Hitesh" //Yaha pr humne context change krdia 
// user.welcomeMsg()

// console.log(this); //gives empty, since we are in node env, our this is referring to nothing here
//browser pr window ata hai answer, Window Object is global object in our browser

// function chai() {
//     let username = "varenya"
//     console.log(this.username); // fgives undefined since chai() is not an object but an function.
//     console.log(this);
// }

// chai() // ye bahut saari vlaues deta hai

// const chai = function() {
//     let username = "Varenya"
//     console.log(this.username); // ye bhi undefined hi rahega
// }

// chai()

// //ARROW FUNCTION
// const chai = () => {
//     let username = "Varenya"
//     console.log(this.username);
//     console.log(this);
// }
//Yaha pr bhi undefined hai
// chai()

// const addTwo//this is function name = (num1, num2) //there are parameters => {//fnc def
//     return num1 + num2
// } 

//Implicit return
const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2) // {} me wrap karaa to return likhna padega alwasy, but () me return function nahi likhna padega

// const addTwo = (num1, num2) => {username: "Varenya"} Wont run, kyuki apn istarah se object return nahi krte

// const addTwo = (num1, num2) => ({username: "Varenya"})
console.log(addTwo(3, 4));