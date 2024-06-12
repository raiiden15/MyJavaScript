const instaUser = new Object() //Both the ways it declared an empty object.
// const instaUser = {} , only difference is of singleton and non singleton, this way is non singleton
// console.log(instaUser);
//singleton -> only one instance of object.
//non singleton -> multiple instances of objects.
instaUser.Id = "abc123"
instaUser.Name = "Sam"
instaUser.isLoggedIn = false

// console.log(instaUser);
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstName: "Varenya",
            lastName: "Pawnikar"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstName); 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "A", 4: "B"}
const obj33 = {5: "A", 6: "B"}
const obj4 = {7: "A", 8: "B"}

// const obj3 = {obj1, obj2} same as array gives object k andar object
// const obj3 = Object.assign(obj1, obj2) 
const obj3 = Object.assign({}, obj1, obj2, obj33, obj4) //gives same o/p but its better to do it this way, since apne pass aur bhi vals ho sakti h. // {} denotes empty array me store kro vrna vo obj1 me store krdega

console.log(obj3); 
// Kuch aisa
// const obj = Object.assign(obj1, obj2, obj3)
// console.log(obj1);

// Better Way
const obj = {...obj1, ...obj2, ...obj33, ...obj4}
// console.log(obj);

const arrofobj = [
    {
        id: 1,
        userName: "V"
    },
    {
        id: 1,
        userName: "T"
    },
    {
        id: 1,
        userName: "X"
    }   
]
// console.log(arrofobj[2].userName); 
// console.log(instaUser);

// console.log(Object.keys(instaUser)); //returns an array of keys. 
// console.log(Object.values(instaUser)); //returns an array of keys. 
// console.log(Object.entries(instaUser)); //returns an array of keys and value pair. 

// console.log(instaUser.hasOwnProperty('Id'));

//Destructuring Objects and Arrays (Later)
const course = {
    courseName: "JS",
    price: "999",
    courseInstructor: "Hitesh"
}

//for a clean code, its a syntactical sugar
const {courseInstructor: Instructor} = course
//this is destructuring, we are referring to course.courseInstructor as only Instructor via destructuring
console.log(Instructor)

//API's - apna kaam kisi aur k sar pr dalna 

//  All API's are In JSON - javaScript Object Notation
// {
//     name: "varenya",
//     coursename: "JsHIndi",
//     price: "free"
// // }