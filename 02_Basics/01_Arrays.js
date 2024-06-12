//Arrays
const myArray = [0, 1, 2, 3, 4, 5] //different types of elms can also enter in a array

// console.log(myArray);
// console.log(myArray[4]);
//arrays shallow copies banata hai, its a copy whose properties share the same reference point (heap)
//deep copies, copy whose prop do not share same reference.

const myHeors = ["Shaktiman", "Hulk"]
const arr = new Array(1, 2, 3, 4)
// arr.push(5)
// arr.push(6)
// arr.pop()

arr.unshift(0) //adds elem to starting of the list
arr.unshift(-1) //but its time consuming and loads computer, therefore not optimal.

// console.log(arr.indexOf(-1)) 
// console.log(arr); 
const newArr = arr.join()  // gives o/p as string of the array
// console.log(newArr)

// Slice and Splice
// console.log("A ", arr); //Array Naming lol
const ma1 = arr.slice(1, 3) // last index not included
// console.log(": ", ma1);
// console.log("B ", arr);

const ma2 = arr.splice(1, 3)
//Difference between splice and slice is that splice actually cuts the array, while slice does not modify the current array
//Splice Make chages to original array.
// console.log(": ", ma2)
// console.log("C ", arr)