//Dates returns in ms from JAN 1 1970
//Temporal API is the future for Date. It's a proposal.

let myDate = new Date()
console.log(myDate); //Not readable tbh
// console.log(myDate.toDateString());
// console.log(myDate.toString());

console.log(typeof myDate); //Date is object in JS

let myCreatedDate = new Date(2023, 11, 23, 5, 3, 58) //Month zero se start hota h.
// console.log(myCreatedDate.toLocaleString()); //Returns Date time and values.

let newDate = new Date("01-03-24")
// console.log(newDate.toLocaleDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp); //ms value from jan 1st 1970
// console.log(newDate.getTime()); //returns ms value of created date in different form.

// console.log(Math.floor(Date.now() / 1000)); // returns in 's' rather than ms.

let date = new Date()
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getFullYear());

console.log(`${date.getDate()} is out current date`);
console.log(date.toLocaleString('default', {
    weekday: "short" 
})) // can be used to modify the the localestring in a better way, gives short form for day eg. Thur
