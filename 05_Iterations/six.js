const coding = ["js", "ruby", "java", "python", "cpp"]

// for each fnc koi bhi value return nahi krta.
const values = coding.forEach( (item) => {
    // console.log(item);
    // return item; // useless
} );

// console.log(values); //returns undefined 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4);
// const newNums = myNums.filter( (num) => {
// //    num > 4; // this gives empty array as o/p
//     return num > 4; // since we opened a {} scope
// });

// console.log(newNums);

// This gives same o/p as above but can't be done directly, therefore we prefer filter over forEach, but it works. 

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (book) => book.genre === "History");

  userBooks = books.filter( (book) => book.publish >= 1995) 

  userBooks = books.filter( (book) => book.genre === "History" && book.publish >= 1995)

  console.log(userBooks);