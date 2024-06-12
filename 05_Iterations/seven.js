const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map((num) => {return num + 10});
// console.log(newNums); //Try using forEach also

// CHAINING
const newNums = myNums
            .map((num) => num * 10)
            .map((num) => num + 1)
            .filter((num) => num >= 40) // ye wala map me upr k updated values use hongi
console.log(newNums);
//