const marvel_heros = ["Thor", "Iron Man", "Spider Man"]
const dc_heros = ["Batman", "Superman", "Flash"]

marvel_heros.push(dc_heros) //this does not merge dc heroes to marvel heros instead creates an array of array
// console.log(marvel_heros); 
// console.log(marvel_heros[3]); // its an array 
// console.log(marvel_heros[3][2]); 

// const allHeros = marvel_heros.concat(dc_heros) //Correctly merges the 2 arrays
// console.log(allHeros);

//Spread - kanch ka glass girne pr spread hojata XD
const all_new_heroes = [...marvel_heros, ...dc_heros] // array nahi raha, ek ek element indv hogaya
// console.log(all_new_heroes); //Outputs the same thing as concat

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//how to handle such arrays
const myUsableArray = anotherArray.flat(Infinity) //isme depth deni padti h, infinity dekne pr automatically work hojata h
console.log(myUsableArray); //Just merges it to a single array

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) // Char wise array me dedeta hai

console.log(Array.from({name: "Varenya"}))  //return empty string if that does not work, ie if it cannot create an array.

let score1 = 100
let score2 = 300
let score3 = 500

console.log(Array.of(score1, score2, score3)) //Creates an array of provided elements.