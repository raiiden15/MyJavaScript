const score = 207
// console.log(score); // 207
const balance = new Number(299) // [Number: 299]
// console.log(balance);

// console.log(score.toString().length); 
// console.log(score.toFixed(9)); // gives precision values.

const otherVal = 23.12395
// console.log(otherVal);
// console.log(otherVal.toPrecision(3)); //returns a string

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN')); // gives value according to indian standard values

//&&&&&&&&&&& MATH ????????????
// console.log(Math); // Crazy inbuilt library 
// console.log(Math.abs(-4)); //abs - absolute
// console.log(Math.round(4.5)); 
// console.log(Math.ceil(4.1)); 
// console.log(Math.floor(4.9)); 

// console.log(Math.min(5, 1, 0, -66, -9900)); 
// console.log(Math.max(5, 1, 0, -66, -9900)); 

console.log(Math.random()); //always gives a random number between 0 and 1
console.log(Math.floor((Math.random() * 10) + 1)); // so that we don't get value as 0 for cases like 0.041 
// gives value from 1 to 10
const min = 10
const max = 20

// console.log(Math.floor((Math.random() * (max - min + 1) + min))); //max - min -> is our range, we added 1 to avoid the zero condition, and also added min at end so that our value is always between min and max.
