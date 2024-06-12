// Immediately Invoked Function Expressions (IIFE)

(function chai() { //Name IIFE
    console.log(`DB CONENCTED`);
})() ; //IIFE ko pata nah hota context rokna kaha pr hai, isslie ';' jaruri hai.

// ()() - First parenthesis is for function defination, second is for function call.

//IIFE use kyu karen fir ? To stop pollution from global scope.
// chai()

//Unnamed IIFE
( (name)  => {  // name is our parameter.
    console.log(`DB CONNECTED 2 ${name}`);
}) ("Varenya") // this is our argument.